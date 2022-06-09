from os import environ
from gmahechas_erp_common_ms_utils_py import Env, MongoClient


class Mongo3:
    __instance = None

    def __init__(self, uri):
        if Mongo3.__instance is not None:
            raise Exception("Mongo3 already initialized")
        else:
            Mongo3.__instance = MongoClient(uri)

    @staticmethod
    def get():
        if Mongo3.__instance is None:
            raise Exception("Mongo3 not initialized")
        else:
            return Mongo3.__instance


def connect_databases():
    app_name = environ["APP_NAME"]
    uri = Env.get()["ms-3"]["databases"]["mongo"]["uri"]
    mongo3 = Mongo3(uri)
