import os

config = {
    "environment": os.environ["ENVIRONMENT"],
    "ms-3": {
        "app": {
            "name": "",
            "port": 5000,
        },
        "databases": {
            "mongo": {
                "uri": None
            }
        }
    }
}
