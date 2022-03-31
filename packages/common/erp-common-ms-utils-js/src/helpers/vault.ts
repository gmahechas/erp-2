import vault from 'node-vault';
import { axiosClient, AxiosInstance } from './axios';

export class Vault {

	private _client: vault.client;
	static axios: AxiosInstance;

	get client() {
		if (!this._client) {
			throw new Error('Cannot access client before initializate');
		}
		return this._client;
	}

	constructor(endpoint: string, token: string) {
		const options: vault.VaultOptions = { apiVersion: 'v1', endpoint, token };
		this._client = vault(options);
	}

	static approleLogin = async (url: string, roleId: string, secretId: string) => {
		Vault.axios = axiosClient(url);
		const { data } = await Vault.axios.post<{ auth: { client_token: string }}>('/v1/auth/approle/login', { role_id: roleId, secret_id: secretId }); 
		return data;
	}

	read = async (path: string) : Promise<{ data: { data: any }}> => {
		return await this.client.read(path);
	}

}