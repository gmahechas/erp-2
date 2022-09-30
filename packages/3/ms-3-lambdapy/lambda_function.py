import json
from gmahechas_erp_common_lambdapy import router_lambda
from routes import routes


def lambda_handler(event):
    route = router_lambda(event, routes)
    http_method, path, middlewares, args, action, status_code = [route[k] for k in route.keys()]

    return {
        'statusCode': status_code,
        'body': json.dumps('Hello from Lambda!')
    }
