from flask import jsonify


def response(code=None, data=None, error=None):
    return {
        'statusCode': code,
        'body': jsonify({"data": data, "error": error}),
    }
