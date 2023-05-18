from decouple import config
# import os

# BASE_DIR = os.path.dirname(os.path.realpath(__file__))


class Config:
    SECRET_KEY = config("SECRET_KEY")
    SQALCHEMY_TRACK_MODIFICATIONS = config("SQALCHEMY_TRACK_MODIFICATIONS", cast = bool)
    

class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI='mysql+mysqlconnector://root@localhost/tododb'
    DEBUG = True
    SQALCHEMY_ECHHO = True


class ProdConfig(Config):
    pass

class TestConfig(Config):
    pass