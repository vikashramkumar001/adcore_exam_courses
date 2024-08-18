from pymongo import MongoClient
from datetime import datetime


class Course:
    def __init__(self, db):
        self.collection = db['courses']

    def insert_course(self, course_data):
        # Ensure the creation date is added
        course_data['createdAt'] = datetime.utcnow()
        result = self.collection.insert_one(course_data)
        return result.inserted_id

    def get_courses(self, query=None, page=1, per_page=10):
        if query is None:
            query = {}
        skip = (page - 1) * per_page
        courses = self.collection.find(query).skip(skip).limit(per_page)
        return list(courses)

    def update_course(self, course_id, updates):
        result = self.collection.update_one({"_id": course_id}, {"$set": updates})
        return result.modified_count

    def delete_course(self, course_id):
        result = self.collection.delete_one({"_id": course_id})
        return result.deleted_count