from functools import wraps
from flask import Response, request


def validator_middleware(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        if False:
            return Response('Authorization failed', status=401)
        return function(*args, **kwargs)

    return wrapper
