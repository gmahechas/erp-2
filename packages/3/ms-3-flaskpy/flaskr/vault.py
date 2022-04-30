import requests
import os
import hvac


class Vault:
    vault_client = None

    @staticmethod
    def init_vault(url, role_id, secret_id):
        data = requests.post(f"{url}/v1/auth/approle/login", json={'role_id': role_id, 'secret_id': secret_id})
        return data.json()

    @staticmethod
    def read(path):
        vault_secrets = Vault.vault_client.secrets.kv.v2.read_secret_version(mount_point='kv', path=path)['data']['data']
        return vault_secrets


def init_vault():
    vault_url = os.environ["VAULT_URL"]
    vault_role_id = os.environ["VAULT_ROLE_ID"]
    vault_secret_id = os.environ["VAULT_SECRET_ID"]

    data = Vault.init_vault(vault_url, vault_role_id, vault_secret_id)
    client_token = data['auth']['client_token']
    Vault.vault_client = hvac.Client(url=vault_url, token=client_token)

