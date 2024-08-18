import os
import sys

sys.path.insert(0, '/var/www/html/adcore_exam_courses')

#virtualenv settings
activate_this = '/var/www/html/adcore_exam_courses/venv/bin/activate_this.py'
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))

# Create application for the app
from app import app as application
