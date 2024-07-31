
def router_lambda(event, routes):
    for route in routes:
        if event['httpMethod'] == route['http_method'] and event['path'] == route['path']:
            return route
    return "not found"
