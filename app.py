from functools import wraps

import requests
from bson import ObjectId
from bson.errors import InvalidId
from flask import Flask, request, jsonify
from pymongo import errors, ASCENDING
from pymongo.mongo_client import MongoClient
import pandas as pd
import io
from datetime import datetime, timedelta

app = Flask(__name__, static_url_path="")


def make_client(uri):
    # Create a new client and connect to the server
    return MongoClient(uri)


def create_db(client):
    # Create or connect to the database
    return client['courses_database']


def create_collection(db):
    return db['courses']


def set_ttl_index(collection):
    indexes = collection.index_information()
    if "createdAt_1" not in indexes:
        collection.create_index("createdAt", expireAfterSeconds=600)


def is_valid_price(price):
    try:
        price = float(price)
        return price >= 0
    except ValueError:
        return False


def get_and_normalize_data():
    url = "https://api.mockaroo.com/api/501b2790?&key=8683a1c0"
    response = requests.get(url)
    df = pd.read_csv(io.StringIO(response.text))

    # Normalize text columns (remove special characters, trim spaces)
    df['University'] = df['University'].str.replace('[^A-Za-z0-9 ]+', '', regex=True).str.strip()
    df['City'] = df['City'].str.replace('[^A-Za-z0-9 ]+', '', regex=True).str.strip()
    df['Country'] = df['Country'].str.replace('[^A-Za-z0-9 ]+', '', regex=True).str.strip()
    df['CourseName'] = df['CourseName'].str.replace('[^A-Za-z0-9 ]+', '', regex=True).str.strip()
    df['CourseDescription'] = df['CourseDescription'].str.replace('[^A-Za-z0-9 ]+', '', regex=True).str.strip()
    df['Currency'] = df['Currency'].str.replace('[^A-Za-z0-9 ]+', '', regex=True).str.strip()
    df['Price'] = df['Price'].apply(lambda x: x if is_valid_price(x) else 0)

    # Convert StartDate and EndDate to datetime format
    # pandas seems to be converting the dates automatically from %d/%m/%Y to %Y-%m-%d
    df['StartDate'] = pd.to_datetime(df['StartDate'], format='%Y-%m-%d')
    df['EndDate'] = pd.to_datetime(df['EndDate'], format='%Y-%m-%d')

    # Convert Price to float
    df['Price'] = df['Price'].astype(float)

    # Ensure Currency codes are valid (you may want to validate against an actual list of ISO currency codes)
    df['Currency'] = df['Currency'].str.upper().str.strip()
    return df


def save_courses_to_db(collection, df):
    df['createdAt'] = datetime.utcnow()  # Add creation time
    collection.insert_many(df.to_dict('records'))
    set_ttl_index(collection)


def check_and_load_data(collection):
    if collection.count_documents({}) == 0:
        df = get_and_normalize_data()
        save_courses_to_db(collection, df)


def get_oldest_creation_time(collection):
    try:
        # Attempt to get the first document sorted by 'createdAt'
        oldest_course = collection.find().sort("createdAt", ASCENDING).limit(1).next()
        return oldest_course['createdAt']
    except StopIteration:
        # This is raised if the cursor has no documents
        return datetime.utcnow()


uri = "mongodb+srv://admin:admin@adcoreexam.a7l8x.mongodb.net/?retryWrites=true&w=majority&appName=AdcoreExam"

client = make_client(uri)
db = create_db(client)
courses_collection = db['courses']
# don't change the expireAfterSeconds - will throw an error - leave at 10 minutes
courses_collection.create_index('createdAt', expireAfterSeconds=600)
check_and_load_data(courses_collection)


def check_and_load_data_wrapper(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        # Assuming 'collection' is globally accessible or replace with the correct way to access it
        check_and_load_data(courses_collection)  # Use the existing function
        return func(*args, **kwargs)

    return wrapper


@app.route("/")
def index():
    return app.send_static_file("frontend/dist/index.html")


@app.route('/get/courses', methods=['GET'])
@check_and_load_data_wrapper
def get_courses():
    check_and_load_data(courses_collection)

    search = request.args.get('search', '').strip().lower()
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('limit', 10))
    skip = (page - 1) * per_page

    # Create a query object for MongoDB
    query = {}
    if search:
        query['$or'] = [
            {'University': {'$regex': search, '$options': 'i'}},
            {'City': {'$regex': search, '$options': 'i'}},
            {'Country': {'$regex': search, '$options': 'i'}},
            {'CourseName': {'$regex': search, '$options': 'i'}},
            {'CourseDescription': {'$regex': search, '$options': 'i'}}
        ]

    courses = list(courses_collection.find(query).skip(skip).limit(per_page))
    for course in courses:
        course['_id'] = str(course['_id'])

    total_count_query = courses_collection.count_documents(query)

    return jsonify({'courses': courses, 'total': total_count_query})


@app.route('/update/course/<course_id>', methods=['PUT'])
@check_and_load_data_wrapper
def update_course(course_id):
    try:
        # Ensuring the ObjectId is valid
        oid = ObjectId(course_id)
    except InvalidId:
        return jsonify({'status': 'error', 'message': 'Invalid course ID'}), 400

    data = request.json
    if not data:
        return jsonify({'status': 'error', 'message': 'No data provided'}), 400

    # Optionally, validate the data fields are part of the allowed set of fields to update
    allowed_fields = {'CourseDescription', 'StartDate', 'EndDate', 'Price', 'Currency'}
    if not all(key in allowed_fields for key in data.keys()):
        return jsonify({'status': 'error', 'message': 'One or more fields are invalid'}), 400

    # Performing the update
    result = courses_collection.update_one({'_id': oid}, {'$set': data})

    if result.modified_count > 0:
        return jsonify({'status': 'success'}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Course not found or not modified'}), 404


@app.route('/delete/course/<course_id>', methods=['DELETE'])
@check_and_load_data_wrapper
def delete_course(course_id):
    result = courses_collection.delete_one({'_id': ObjectId(course_id)})

    if result.deleted_count > 0:
        return jsonify({'status': 'success'}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Course not found'}), 404


@app.route('/create/course', methods=['POST'])
@check_and_load_data_wrapper
def create_course():
    data = request.json

    # Basic validation for required fields
    required_fields = ['University', 'City', 'Country', 'CourseName', 'CourseDescription', 'StartDate', 'EndDate',
                       'Price', 'Currency']
    if not all(field in data for field in required_fields):
        return jsonify({'status': 'error', 'message': 'Missing required field'}), 400

    try:
        data['createdAt'] = get_oldest_creation_time(courses_collection)
        result = courses_collection.insert_one(data)
        if result.inserted_id:
            return jsonify({'status': 'success', 'id': str(result.inserted_id)}), 201
    except errors.DuplicateKeyError:
        return jsonify({'status': 'error', 'message': 'Duplicate entry'}), 409

    return jsonify({'status': 'error', 'message': 'Failed to create course'}), 500


@app.route('/get/lists', methods=['GET'])
@check_and_load_data_wrapper
def get_lists():
    pipeline = [
        {
            '$group': {
                '_id': None,
                'universities': {'$addToSet': '$University'},
                'cities': {'$addToSet': '$City'},
                'countries': {'$addToSet': '$Country'},
                'currencies': {'$addToSet': '$Currency'},
                'courses': {'$addToSet': '$CourseName'}
            }
        }
    ]
    results = list(courses_collection.aggregate(pipeline))
    if results:
        result = {key: results[0][key] for key in results[0] if key != '_id'}
        return jsonify(result), 200
    else:
        return jsonify({'error': 'No data found'}), 404
