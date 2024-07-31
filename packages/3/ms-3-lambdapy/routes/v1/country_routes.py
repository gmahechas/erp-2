def create_once_country():
    return "country created"


country_routes = [
    {
        'http_method': 'POST',
        'path': '/rest/v1/3/country/create/one',
        'middlewares': [],
        'args': ['body'],
        'action': create_once_country,
        'status_code': 200,
    },
]
