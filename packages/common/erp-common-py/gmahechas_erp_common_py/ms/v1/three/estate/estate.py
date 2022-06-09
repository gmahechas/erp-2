class Estate:
    def __init__(self, estate_id, estate_name, estate_code, country_id):
        self.estate_id = estate_id
        self.estate_name = estate_name
        self.estate_code = estate_code
        self.country_id = country_id

    def get_name(self):
        return self.estate_name
