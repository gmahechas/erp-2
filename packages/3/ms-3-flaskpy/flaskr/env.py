import os
import importlib


class Config:
    config = None

    @staticmethod
    def init_env(config):
        Config.config = config


def init_env():
    flask_app, environment = os.environ["FLASK_APP"], os.environ["ENVIRONMENT"]
    module = importlib.import_module(f"{flask_app}.environments.{environment}", ".")
    Config.init_env(module.config)
