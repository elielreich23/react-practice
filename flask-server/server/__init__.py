from flask import Flask
from flask_restx import Api, Resource
from config import DevConfig
import userroutes


app = Flask(__name__)
app.config.from_object(DevConfig)
userroutes = userroutes(app, doc="/")
api = Api(app, doc="/docs")



# db = SQLAlchemy(app)
#load the routes

