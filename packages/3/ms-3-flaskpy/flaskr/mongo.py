from flask import g, current_app
import pymongo


class MongoManager:
    __instance__ = None

    def __init__(self):
        if self.__instance__ is None:
            self.__instance = pymongo.MongoClient('mongodb://root:root@10.1.0.229:27017/erp_ms_3?authSource=admin')
        else:
            raise Exception("This class is a singleton!")

    @staticmethod
    def get_instance():
        if not MongoManager.__instance__:
            MongoManager()
        return MongoManager.__instance__