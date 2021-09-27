import { existsSync } from 'fs';
import dotenv from 'dotenv';
import { ConfigError } from '../errors/config.error';
import { IConfig } from '../interfaces/config';
import { paths } from './paths';

export let env: IConfig;

export const initEnv = async () => {
	dotenv.config();
	const environment = process.env.ENVIRONMENT;
	if (!environment) {
		throw new ConfigError();
	}
	const file = paths.appEnvironments + '/' + environment + '.ts';
	if (!existsSync(file)) {
		throw new ConfigError();
	}

	const { config } = await import(file);
	env = config;
}

export const initEnvOutside = async (environment: string | undefined) => {
	if (!environment) {
		throw new ConfigError();
	}
	const file = paths.appEnvironments + '/' + environment + '.ts';
	if (!existsSync(file)) {
		throw new ConfigError();
	}
	const { config } = await import(file);
	env = config;
}