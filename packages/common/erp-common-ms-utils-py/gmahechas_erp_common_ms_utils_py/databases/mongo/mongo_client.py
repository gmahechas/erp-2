from pymongo import MongoClient


class Mongo:
    __instance = None

    def __init__(self, uri):
        self.__instance = MongoClient(uri)
