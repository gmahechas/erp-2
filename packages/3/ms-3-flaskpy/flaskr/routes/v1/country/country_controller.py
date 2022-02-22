from .country_mongo import CountryMongo


class CountryController:

    def search_many_country(self):
        result = CountryMongo().find()
        return result
