from .country_mongo import CountryMongo


class CountryController:

    country_mongo = CountryMongo()

    def create_one_country(self, data):
        result = self.country_mongo.create_one(data)
        return result

    def update_one_country(self, data):
        result = self.country_mongo.update_one(data)
        return result

    def delete_one_country(self, data):
        result = self.country_mongo.delete_one(data)
        return result

    def search_one_country(self, data):
        result = self.country_mongo.search_one(data)
        return result

    def search_many_country(self, data):
        result = self.country_mongo.search_many(data)
        return result
