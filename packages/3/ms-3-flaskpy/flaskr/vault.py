import requests
import hvac


class Vault:
    client = None

    @staticmethod
    def init_vault(role_id, secret_id):
        data = requests.post('http://10.1.0.229:8200/v1/auth/approle/login', json={'role_id': role_id, 'secret_id': secret_id})
        return data.json()


def init_vault():
    data = Vault.init_vault('99310460-081a-a1bc-36c5-c81807f97eae', '8b6519d4-291b-d953-b053-6094be69817a')
    client_token = data['auth']['client_token']
    Vault.client = hvac.Client(url='http://10.1.0.229:8200', token=client_token)

