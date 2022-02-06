import os

config = {
    "environment": os.environ["ENVIRONMENT"],
    "ms-3": {
        "app": {
            "name": os.environ["APP_NAME"],
            "port": os.environ["THREE_APP_PORT"],
        },
        "databases": {
            "mongo": {
                "uri": None
            }
        }
    }
}
