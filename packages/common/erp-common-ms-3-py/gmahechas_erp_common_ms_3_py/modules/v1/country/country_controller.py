from .country_model import CountryModel


class CountryController:

    def __init__(self):
        self.country_model = CountryModel()

    def create_one_country(self, data):
        result = self.country_model.create_one(data)
        return result

    def update_one_country(self, data):
        result = self.country_model.update_one(data)
        return result

    def delete_one_country(self, data):
        result = self.country_model.delete_one(data)
        return result

    def search_one_country(self, data):
        result = self.country_model.search_one(data)
        return result

    def search_many_country(self, data):
        result = self.country_model.search_many(data)
        return result
