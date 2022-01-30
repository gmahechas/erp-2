from ....mongo import MongoManager


class CountryController(MongoManager):

    def __init__(self):
        pass

    def get_all_countries(self):
        self.insert()
