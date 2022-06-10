from json import dumps


def response(code=None, data=None, error=None):
    return {
        'statusCode': code,
        'body': dumps({"data": data, "error": error}),
    }
