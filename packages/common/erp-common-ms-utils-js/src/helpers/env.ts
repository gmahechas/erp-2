import dotenv from 'dotenv';
import { TypeErrorMessage } from '../errors/utils/error-type.enum';
import { sendError } from '../errors/utils/send-error';
import { IConfig } from '../interfaces/config.interface';
import { resolvePath, checkExistsFile } from './node';
import { Vault } from './vault';

export let env: IConfig;

export const initEnv = async (useDotEnv = true) => {
	if (useDotEnv) {
		await readEnvFile();
	}
	const environment = process.env.ENVIRONMENT;
	const vaultUrl = process.env.VAULT_URL;
	const vaultRoleId = process.env.VAULT_ROLE_ID;
	const vaultSecretId = process.env.VAULT_SECRET_ID;
	const appName = process.env.APP_NAME;
	if (!environment || !vaultUrl || !vaultRoleId || !vaultSecretId || !appName) {
		sendError(TypeErrorMessage.CONFIG);
	}
	const { auth: { client_token } } = await Vault.approleLogin(vaultRoleId!, vaultSecretId!);
	const vaultClient = new Vault(vaultUrl!, client_token);
	const myConfig = await vaultClient.read(`kv/data/erp/${appName}/${environment}`);
	console.log(myConfig);

	const fileFolder = ((environment == 'development') ? 'src' : 'dist') + '/environments/';
	const filePath = resolvePath(fileFolder + environment)
	const extension = (environment == 'development') ? '.ts' : '.js'
	const fullFilePath = filePath + extension;

	if (!checkExistsFile(fullFilePath)) {
		sendError(TypeErrorMessage.CONFIG);
	}
	const { config } = await import(filePath);
	env = config;
}

const readEnvFile = async () => {
	return new Promise<void>((resolve, reject) => {
		const env = dotenv.config()
		if (env.error) {
			reject(env.error)
		}
		resolve();
	});
};