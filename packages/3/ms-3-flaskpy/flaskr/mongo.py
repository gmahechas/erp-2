from pymongo import MongoClient
from .env import Config


class Mongo(Config):
    mongo_client = None

    @staticmethod
    def init_db():
        mongo_uri = Mongo.config["ms-3"]["databases"]["mongo"]["uri"]
        Mongo.mongo_client = MongoClient(mongo_uri)


def init_db():
    Mongo.init_db()
