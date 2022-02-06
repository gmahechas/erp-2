from flask import g, current_app
import pymongo


class Mongo:
    client = None

    @staticmethod
    def init_db():
        Mongo.client = pymongo.MongoClient('mongodb://root:root@10.1.0.229:27017/erp_ms_3?authSource=admin')


def init_db():
    Mongo.init_db()
