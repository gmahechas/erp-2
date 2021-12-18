import dotenv from 'dotenv';
import { TypeErrorMessage } from '../errors/utils/error-type.enum';
import { sendError } from '../errors/utils/send-error';
import { IConfig } from '../interfaces/config.interface';
import { resolvePath, checkExistsFile } from './node';

export let env: IConfig;

export const initEnv = async (useDotEnv = true) => {
	if (useDotEnv) {
		dotenv.config();
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
}