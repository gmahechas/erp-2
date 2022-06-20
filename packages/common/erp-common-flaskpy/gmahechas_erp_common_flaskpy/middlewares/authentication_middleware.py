from functools import wraps
from flask import request, Response
from gmahechas_erp_common_py import response
from gmahechas_erp_common_ms_utils_py import JWT, Context


def authentication_middleware(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        token = request.headers.get("Authorization")
        if token is None:
            data = response(400, error={"type": "authentication"})
            status_code, body = data['statusCode'], data['body']
            return Response(body, mimetype='application/json', status=status_code)

        auth = JWT.decode(token)
        Context.set('token', token)
        Context.set('auth', auth)
        return function(*args, **kwargs)

    return wrapper
