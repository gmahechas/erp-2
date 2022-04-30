from flask import make_response
from functools import wraps
from flaskr.context import Context
import json
from flaskr.response import response


def authorization_middleware(scopes):
    @wraps(scopes)
    def authorization_middleware_wrap(function):
        @wraps(function)
        def wrapper(*args, **kwargs):
            auth = Context.get("auth")
            scope = json.loads(auth["scope"])
            for capability in scopes:
                [service, actions] = capability.split(":")
                if not scope[service]:
                    data = response(400, error={"type": "authorization"})
                    status_code, body = data['statusCode'], data['body']
                    return make_response(body, status_code)

                for action in actions.split(":"):
                    if action not in scope[service]:
                        data = response(400, error={"type": "authorization"})
                        status_code, body = data['statusCode'], data['body']
                        return make_response(body, status_code)

            return function(*args, **kwargs)

        return wrapper

    return authorization_middleware_wrap
