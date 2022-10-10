import dotenv from 'dotenv';
import { TypeErrorMessage } from '../errors/utils/error-type.enum';
import { sendError } from '../errors/utils/send-error';
import { IConfig } from '../interfaces/config.interface';
import { resolvePath, checkExistsFile } from './node';
import { initVault, Vault } from './vault';

export let env: NonNullable<IConfig>;

export const initEnv = async (useDotEnv = true) => {
  if (useDotEnv) {
    await readEnvFile();
  }
  const environment = process.env.ENVIRONMENT;
  if (!environment) {
    sendError(TypeErrorMessage.CONFIG);
  }

  const fileFolder =
    (environment == 'development' ? 'src' : 'dist') + '/environments/';
  const filePath = resolvePath(fileFolder + environment);
  const extension = environment == 'development' ? '.ts' : '.js';
  const fullFilePath = filePath + extension;

  if (!checkExistsFile(fullFilePath)) {
    sendError(TypeErrorMessage.CONFIG);
  }
  const { config } = await import(filePath);
  env = config;
  await enrichEnv(env, environment!);
};

const enrichEnv = async (env: any, environment: string) => {
  try {
    await initVault();
    const appName = process.env.APP_NAME!;
    const {
      data: { data: vaultSecrets },
    }: any = await Vault.read(`kv/data/erp/${appName}/${environment}`);
    const currentEnv = env[appName];
    switch (appName) {
      case 'ms-0':
        currentEnv.auth.jwt.publicKey = currentEnv.auth.jwt.publicKey
          ? currentEnv.auth.jwt.publicKey
          : vaultSecrets.publicKey;
        currentEnv.session.redis.url = currentEnv.session.redis.url
          ? currentEnv.session.redis.url
          : vaultSecrets.redis_url;
        currentEnv.session.cookie_name = currentEnv.session.cookie_name
          ? currentEnv.session.cookie_name
          : vaultSecrets.cookie_name;
        currentEnv.session.cookie_secret = currentEnv.session.cookie_secret
          ? currentEnv.session.cookie_secret
          : vaultSecrets.cookie_secret;
        break;
      case 'ms-1':
        currentEnv.databases.mongo.uri = currentEnv.databases.mongo.uri
          ? currentEnv.databases.mongo.uri
          : vaultSecrets.mongo_uri;
        currentEnv.auth.jwt.privateKey = currentEnv.auth.jwt.privateKey
          ? currentEnv.auth.jwt.privateKey
          : vaultSecrets.privateKey;
        currentEnv.auth.jwt.publicKey = currentEnv.auth.jwt.publicKey
          ? currentEnv.auth.jwt.publicKey
          : vaultSecrets.publicKey;
        break;
      case 'ms-3':
        currentEnv.databases.mongo.uri = currentEnv.databases.mongo.uri
          ? currentEnv.databases.mongo.uri
          : vaultSecrets.mongo_uri;
        currentEnv.auth.jwt.publicKey = currentEnv.auth.jwt.publicKey
          ? currentEnv.auth.jwt.publicKey
          : vaultSecrets.publicKey;
        break;
      case 'ms-4':
        currentEnv.databases.mongo.uri = currentEnv.databases.mongo.uri
          ? currentEnv.databases.mongo.uri
          : vaultSecrets.mongo_uri;
        currentEnv.auth.jwt.publicKey = currentEnv.auth.jwt.publicKey
          ? currentEnv.auth.jwt.publicKey
          : vaultSecrets.publicKey;
        break;
    }
  } catch (error) {
    sendError(TypeErrorMessage.VAULT);
  }
};

const readEnvFile = async () => {
  return new Promise<void>((resolve, reject) => {
    const env = dotenv.config();
    if (env.error) {
      reject(env.error);
    }
    resolve();
  });
};
