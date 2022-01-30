from flask import g, current_app
import pymongo


class MongoManager:
    client = None

    @staticmethod
    def init_db():
        MongoManager.client = pymongo.MongoClient('mongodb://root:root@10.1.0.229:27017/erp_ms_3?authSource=admin')

    @staticmethod
    def insert():
        print(MongoManager.client)
        pass


def init_db():
    MongoManager.init_db()
