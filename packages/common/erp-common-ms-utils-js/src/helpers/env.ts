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
	if (!environment) {
		sendError(TypeErrorMessage.CONFIG);
	}

	const fileFolder = ((environment == 'development') ? 'src' : 'dist') + '/environments/';
	const filePath = resolvePath(fileFolder + environment)
	const extension = (environment == 'development') ? '.ts' : '.js'
	const fullFilePath = filePath + extension;

	if (!checkExistsFile(fullFilePath)) {
		sendError(TypeErrorMessage.CONFIG);
	}
	const { config } = await import(filePath);
	env = config;
	await enrichEnv(env, environment!);
}

const enrichEnv = async (env: any, environment: string) => {

	const appName = process.env.APP_NAME;
	const vaultUrl = process.env.VAULT_URL;
	const vaultRoleId = process.env.VAULT_ROLE_ID;
	const vaultSecretId = process.env.VAULT_SECRET_ID;

	if (!appName || !vaultUrl || !vaultRoleId || !vaultSecretId) {
		sendError(TypeErrorMessage.CONFIG);
	}

	const { auth: { client_token } } = await Vault.approleLogin(vaultUrl!, vaultRoleId!, vaultSecretId!);
	const vaultClient = new Vault(vaultUrl!, client_token);
	const { data: { data: vaultSecrets }}: any = await vaultClient.read(`kv/data/erp/${appName}/${environment}`);
	
	const currentEnv = env[appName!];
	switch (appName) {
		case 'ms-0':
			currentEnv.session.redis.url = currentEnv.session.redis.url ? currentEnv.session.redis.url : vaultSecrets.redis_url;
			currentEnv.auth.jwt.publicKey = currentEnv.auth.jwt.publicKey ? currentEnv.auth.jwt.publicKey : vaultSecrets.publicKey;
			break;
		case 'ms-1':
			currentEnv.databases.mongo.uri = currentEnv.databases.mongo.uri ? currentEnv.databases.mongo.uri : vaultSecrets.mongo_uri;
			currentEnv.auth.jwt.privateKey = currentEnv.auth.jwt.privateKey ? currentEnv.auth.jwt.privateKey : vaultSecrets.privateKey;
			break;
		case 'ms-3':
			currentEnv.databases.mongo.uri = currentEnv.databases.mongo.uri ? currentEnv.databases.mongo.uri : vaultSecrets.mongo_uri;
			break;
		case 'ms-4':
			currentEnv.databases.mongo.uri = currentEnv.databases.mongo.uri ? currentEnv.databases.mongo.uri : vaultSecrets.mongo_uri;
			break;
	}
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