from ....mongo import Mongo


class CountryController(Mongo):

    def __init__(self):
        pass

    def get_all_countries(self):
        self.insert()
