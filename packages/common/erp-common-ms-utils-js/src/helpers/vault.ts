import vault from 'node-vault';
import { axiosClient } from './axios';
const axios = axiosClient('http://10.1.0.229:8200');

export class Vault {

	private _client: vault.client;

	get client() {
		if (!this._client) {
			throw new Error('Cannot access client before initializate');
		}
		return this._client;
	}

	constructor(endpoint: string, token: string) {
		const options: vault.VaultOptions = {
			apiVersion: 'v1',
			endpoint,
			token,
		};
		this._client = vault(options);
	}

	static approleLogin = async (roleId: string, secretId: string) => {
		const { data } = await axios.post<{ auth: { client_token: string }}>('/v1/auth/approle/login', { role_id: roleId, secret_id: secretId }); 
		return data;
	}

	read = async (path: string) : Promise<{ data: { data: any }}> => {
		return await this.client.read(path);
	}

}