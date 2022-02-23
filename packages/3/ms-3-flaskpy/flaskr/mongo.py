from pymongo import MongoClient
from uuid import uuid4
from .env import Config


class Mongo(Config):
    mongo_client = None

    @staticmethod
    def init_db():
        mongo_uri = Mongo.config["ms-3"]["databases"]["mongo"]["uri"]
        Mongo.mongo_client = MongoClient(mongo_uri)


def init_db():
    Mongo.init_db()


class MongoModel(Mongo):
    collection = None

    def __init__(self, collection):
        self.collection = collection

    def insert_one(self, data):
        uuid = str(uuid4())
        doc = {'_id': uuid, **data, 'id': uuid, '__v': 0}
        result = self.mongo_client.get_default_database()[self.collection].insert_one(doc)
        return doc

    def find_one_update(self, data):
        result = self.mongo_client.get_default_database()[self.collection].update_one({'id': data['id']}, {'$set': data})
        print(result.raw_result)
        return data

    def find_one_delete(self, data):
        result = self.mongo_client.get_default_database()[self.collection].delete_one(data)
        return data

    def find_one(self, data):
        result = self.mongo_client.get_default_database()[self.collection].find_one(data)
        return result

    def find(self):
        result = self.mongo_client.get_default_database()[self.collection].find()
        return list(result)
