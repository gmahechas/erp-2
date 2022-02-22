from flaskr.mongo import Mongo


class CountryMongo(Mongo):

    collection = 'countries'

    def find(self):
        data = self.mongo_client.get_default_database()[self.collection].find()
        return list(data)
