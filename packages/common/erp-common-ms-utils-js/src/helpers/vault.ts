import vault from 'node-vault';
import { sendError, TypeErrorMessage } from '../errors';
import { axiosClient, AxiosInstance } from './axios';

export class Vault {
  private static _client: vault.client;
  static axios: AxiosInstance;

  static get client() {
    if (!Vault._client) {
      throw new Error('Can not get client. Please call Vault.init() first.');
    }
    return Vault._client;
  }

  static init = async (url: string, roleId: string, secretId: string) => {
    Vault.axios = axiosClient(url);
    const {
      data: {
        auth: { client_token },
      },
    } = await Vault.axios.post<{ auth: { client_token: string } }>('/v1/auth/approle/login', {
      role_id: roleId,
      secret_id: secretId,
    });
    Vault._client = vault({
      apiVersion: 'v1',
      endpoint: url,
      token: client_token,
    });
  };

  static read = async (path: string): Promise<{ data: { data: any } }> => {
    return await Vault.client.read(path);
  };
}

export const initVault = async () => {
  const vaultUrl = process.env.VAULT_URL!;
  const vaultRoleId = process.env.VAULT_ROLE_ID!;
  const vaultSecretId = process.env.VAULT_SECRET_ID!;
  if (!vaultUrl || !vaultRoleId || !vaultSecretId) {
    sendError(TypeErrorMessage.VAULT);
  }
  await Vault.init(vaultUrl, vaultRoleId, vaultSecretId);
};
