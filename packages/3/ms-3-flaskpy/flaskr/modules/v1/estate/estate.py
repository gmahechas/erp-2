class Estate:
    id = None
    estate_name = None
    estate_code = None
    country_id = None

    def __init__(self, estate_name, estate_code, country_id):
        self.estate_name = estate_name
        self.estate_code = estate_code
        self.country_id = country_id
