from functools import wraps
from flask import Response
from gmahechas_erp_common_py import response
from gmahechas_erp_common_ms_utils_py import Draft7Validator


def validator_middleware(schema):
    @wraps(schema)
    def validator_middleware_wrap(function):
        @wraps(function)
        def wrapper(*args, **kwargs):
            validation = Draft7Validator(schema=schema)
            errors = parse_errors(validation.iter_errors(request.json))

            if len(errors) > 0:
                data = response(400, error=errors)
                status_code, body = data['statusCode'], data['body']
                return Response(body, mimetype='application/json', status=status_code)

            return function(*args, **kwargs)
        return wrapper
    return validator_middleware_wrap


def parse_errors(errors):
    data = []
    for error in errors:
        message, validator, path = error.message, error.validator, error.path
        if validator != 'additionalProperties':
            data.append({"field": path[0], "message": message})
        else:
            data.append({"field": None, "message": message})

    return data
