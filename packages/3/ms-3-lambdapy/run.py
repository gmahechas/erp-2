from lambda_function import lambda_handler

print(lambda_handler({
    'resource': '/rest/v1/3/{proxy+}',
    'path': '/rest/v1/3/country/create/one',
    'httpMethod': 'POST',
    'headers': {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Host': 'mhd8cxctr8.execute-api.us-east-1.amazonaws.com',
        'Postman-Token': '3523014d-b72d-4176-99a9-8f6ec3626f31',
        'User-Agent': 'PostmanRuntime/7.29.2',
        'X-Amzn-Trace-Id': 'Root=1-633646fc-4c9916b03610dbbf6513c910',
        'X-Forwarded-For': '186.118.246.33',
        'X-Forwarded-Port': '443',
        'X-Forwarded-Proto': 'https'
    },
    'multiValueHeaders': {
        'Accept': ['*/*'],
        'Accept-Encoding': ['gzip, deflate, br'],
        'Cache-Control': ['no-cache'],
        'Content-Type': ['application/json'],
        'Host': ['mhd8cxctr8.execute-api.us-east-1.amazonaws.com'],
        'Postman-Token': ['3523014d-b72d-4176-99a9-8f6ec3626f31'],
        'User-Agent': ['PostmanRuntime/7.29.2'],
        'X-Amzn-Trace-Id': ['Root=1-633646fc-4c9916b03610dbbf6513c910'],
        'X-Forwarded-For': ['186.118.246.33'], 'X-Forwarded-Port': ['443'],
        'X-Forwarded-Proto': ['https']
    },
    'queryStringParameters': None,
    'multiValueQueryStringParameters': None,
    'pathParameters': {'proxy': 'country/create/one'},
    'stageVariables': None,
    'requestContext': {
        'resourceId': 'v8jjz4',
        'resourcePath': '/rest/v1/3/{proxy+}',
        'httpMethod': 'POST',
        'extendedRequestId': 'ZQAHgEPDIAMFe1w=',
        'requestTime': '30/Sep/2022:01:31:40 +0000',
        'path': '/stage/rest/v1/3/country/create/one',
        'accountId': '374152141363',
        'protocol': 'HTTP/1.1',
        'stage': 'stage',
        'domainPrefix': 'mhd8cxctr8',
        'requestTimeEpoch': 1664501500695,
        'requestId': '371ab452-fc7c-43db-ab31-507b46c77f3d',
        'identity': {
            'cognitoIdentityPoolId': None,
            'accountId': None,
            'cognitoIdentityId': None,
            'caller': None,
            'sourceIp': '186.118.246.33',
            'principalOrgId': None,
            'accessKey': None,
            'cognitoAuthenticationType': None,
            'cognitoAuthenticationProvider': None,
            'userArn': None,
            'userAgent': 'PostmanRuntime/7.29.2',
            'user': None
        },
        'domainName': 'mhd8cxctr8.execute-api.us-east-1.amazonaws.com',
        'apiId': 'mhd8cxctr8'
    },
    'body': '{\n    "data" : {\n        "countryName": "Colombia"\n    }\n}',
    'isBase64Encoded': False
}))
