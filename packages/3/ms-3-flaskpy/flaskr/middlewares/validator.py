from functools import wraps
from flask import request, jsonify, make_response
from jsonschema import Draft7Validator

from flaskr.response import response


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
                return make_response(body, status_code)

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
