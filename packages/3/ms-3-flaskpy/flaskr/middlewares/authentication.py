from functools import wraps
from flask import request, make_response
from flaskr.jwt import JWT

from flaskr.response import response
from flaskr.context import Context


def authentication_middleware(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        token = request.headers.get("Authorization")
        if token is None:
            data = response(400, error={"type": "authentication"})
            status_code, body = data['statusCode'], data['body']
            return make_response(body, status_code)

        auth = JWT.decode(token)
        Context.set('token', token)
        Context.set('auth', auth)
        return function(*args, **kwargs)

    return wrapper
