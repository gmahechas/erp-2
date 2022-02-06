import os
import importlib


def init_env():
    flask_app, environment = os.environ["FLASK_APP"], os.environ["ENVIRONMENT"]
    module = importlib.import_module(f"{flask_app}.environments.{environment}", ".")
    print(module.config)
