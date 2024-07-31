from functools import wraps
from flask import Response
import json
from gmahechas_erp_common_py import response
from gmahechas_erp_common_ms_utils_py import Context


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
                    return Response(body, mimetype='application/json', status=status_code)

                for action in actions.split(":"):
                    if action not in scope[service]:
                        data = response(400, error={"type": "authorization"})
                        status_code, body = data['statusCode'], data['body']
                        return Response(body, mimetype='application/json', status=status_code)

            return function(*args, **kwargs)

        return wrapper

    return authorization_middleware_wrap
