class Country:
    def __init__(self, country_id, country_name, country_code):
        self.country_id = country_id
        self.country_name = country_name
        self.country_code = country_code

    def get_name(self):
        return self.country_name
