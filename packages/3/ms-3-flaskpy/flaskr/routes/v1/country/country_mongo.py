from flaskr.mongo import MongoModel


class CountryMongo(MongoModel):

    collection = 'countries'

    def __init__(self):
        super().__init__(self.collection)

    def create_one(self, data):
        return self.insert_one(data)

    def update_one(self, data):
        return self.find_one_update(data)

    def delete_one(self, data):
        return self.find_one_delete(data)

    def search_one(self, data):
        return self.find_one(data)

    def search_many(self, data):
        return self.find(data)
