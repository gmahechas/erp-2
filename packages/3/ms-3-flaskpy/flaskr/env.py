import os
import importlib

from .vault import Vault, init_vault


class Config:
    config = None

    @staticmethod
    def init_env(config):
        Config.config = config

    @staticmethod
    def enrich_env(environment):
        init_vault()
        app_name = os.environ["APP_NAME"]
        vault_secrets = Vault.read(f"erp/{app_name}/{environment}")
        current_env = Config.config[app_name]
        if app_name == "ms-3":
            current_env["databases"]["mongo"]["uri"] = current_env["databases"]["mongo"]["uri"] if current_env["databases"]["mongo"]["uri"] is not None else vault_secrets["mongo_uri"]
            current_env["auth"]["jwt"]["publicKey"] = current_env["auth"]["jwt"]["publicKey"] if current_env["auth"]["jwt"]["publicKey"] is not None else vault_secrets["publicKey"]


def init_env():
    flask_app, environment = os.environ["FLASK_APP"], os.environ["ENVIRONMENT"]
    module = importlib.import_module(f"{flask_app}.environments.{environment}", ".")
    Config.init_env(module.config)
    Config.enrich_env(environment)
