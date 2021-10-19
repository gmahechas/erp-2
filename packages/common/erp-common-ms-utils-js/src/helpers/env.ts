import dotenv from 'dotenv';
import { sendError } from '../errors/utils/send-error';
import { IConfig } from '../interfaces/config';
import { resolveApp, checkExistsFile } from './paths';

export let env: IConfig;

export const initEnv = async (useDotEnv = true) => {
	if (useDotEnv) {
		dotenv.config();
	}
	const environment = process.env.ENVIRONMENT;
	if (!environment) {
		sendError('error_config');
	}
	const fileFolder = ((environment == 'development') ? 'src' : 'dist') + '/environments/';
	const filePath = resolveApp(fileFolder + environment)
	const extension = (environment == 'development') ? '.ts' : '.js'
	const fullFilePath = filePath + extension;

	if (!checkExistsFile(fullFilePath)) {
		sendError('error_config');
	}
	const { config } = await import(filePath);
	env = config;
}