from gmahechas_erp_common_ms_utils_py import MongoModel


class CountryMongo(MongoModel):

    def __init__(self):
        super().__init__('countries')

    def create_one(self, data):
        return self.insert_one(data)
