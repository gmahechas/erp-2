from os import environ
from importlib import import_module
from .vault import Vault, init_vault


class Env:
    _instance = None

    def __init__(self, config):
        if Env._instance is not None:
            raise Exception("Env already initialized")
        else:
            Env._instance = config

    def enrich(self, app_name, vault_secrets):
        current_env = self._instance[app_name]
        if app_name == "ms-3":
            current_env["databases"]["mongo"]["uri"] = current_env["databases"]["mongo"]["uri"] if current_env["databases"]["mongo"]["uri"] is not None else vault_secrets["mongo_uri"]
            current_env["auth"]["jwt"]["publicKey"] = current_env["auth"]["jwt"]["publicKey"] if current_env["auth"]["jwt"]["publicKey"] is not None else vault_secrets["publicKey"]

    @staticmethod
    def get():
        if Env._instance is None:
            raise Exception("Env not initialized")
        else:
            return Env._instance


def init_env():
    flask_app, environment, app_name = environ["FLASK_APP"], environ["ENVIRONMENT"], environ["APP_NAME"]
    module = import_module(f"{flask_app}.environments.{environment}", ".")
    env = Env(module.config)

    init_vault()
    vault_secrets = Vault.read(f"erp/{app_name}/{environment}")
    env.enrich(app_name, vault_secrets)
