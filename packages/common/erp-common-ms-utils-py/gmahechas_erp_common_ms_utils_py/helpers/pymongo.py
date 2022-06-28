from uuid import uuid4
from pymongo import MongoClient


class Mongo:
    _instance = None

    def __init__(self, uri):
        Mongo._instance = MongoClient(uri)

    @classmethod
    def instance(cls):
        return cls._instance


class MongoModel:
    collection = None

    def __init__(self, collection):
        self.collection = collection

    def insert_one(self, data):
        uuid = str(uuid4())
        doc = {'_id': uuid, **data, 'id': uuid, '__v': 0}
        result = Mongo.instance().get_default_database()[self.collection].insert_one(doc)
        return doc

    def find_one_update(self, data):
        result = Mongo.instance().get_default_database()[self.collection].update_one({'id': data['id']}, {'$set': data})
        n, n_modified = result.raw_result['n'], result.raw_result['nModified']
        if n > 0 and (n == n_modified):
            return data
        else:
            return None

    def find_one_delete(self, data):
        result = Mongo.instance().get_default_database()[self.collection].delete_one(data)
        n = result.raw_result['n']
        if n > 0:
            return data
        else:
            return None

    def find_one(self, data):
        result = Mongo.instance().get_default_database()[self.collection].find_one(data)
        return result

    def find(self, data):
        search = [{}] if len(data) == 0 else data
        result = Mongo.instance().get_default_database()[self.collection].find({'$or': search})
        return list(result)
