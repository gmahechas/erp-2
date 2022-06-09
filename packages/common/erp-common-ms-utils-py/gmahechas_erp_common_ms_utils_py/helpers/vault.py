from hvac import Client
from os import environ
from requests import post


class Vault:
    __instance = None

    def __init__(self, url, token):
        if Vault.__instance is not None:
            raise Exception("Config already initialized")
        else:
            Vault.__instance = Client(url=url, token=token)

    @staticmethod
    def get_instance():
        if Vault.__instance is None:
            raise Exception("Vault not initialized")
        return Vault.__instance

    @staticmethod
    def auth(url, role_id, secret_id):
        data = post(f"{url}/v1/auth/approle/login", json={'role_id': role_id, 'secret_id': secret_id})
        return data.json()

    @staticmethod
    def read(path):
        vault_secrets = Vault.__instance.secrets.kv.v2.read_secret_version(mount_point='kv', path=path)['data'][
            'data']
        return vault_secrets


def init_vault():
    vault_url = environ["VAULT_URL"]
    vault_role_id = environ["VAULT_ROLE_ID"]
    vault_secret_id = environ["VAULT_SECRET_ID"]

    data = Vault.auth(vault_url, vault_role_id, vault_secret_id)
    client_token = data['auth']['client_token']
    vault = Vault(url=vault_url, token=client_token)
