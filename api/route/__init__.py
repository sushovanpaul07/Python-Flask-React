from flask import Flask
from flask_cors import CORS
from mongoengine import connect


connect(db="test", host="localhost" ,port=2700)


app = Flask(__name__)
CORS(app)



from route import user


