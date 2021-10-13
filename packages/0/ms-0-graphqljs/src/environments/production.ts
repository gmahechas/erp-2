import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'production',
	app: {
		port: process.env.APP_PORT
	},
	databases: {
		session: {
			redis: {
				url: process.env.DATABASES_SESSION_REDIS_URL
			}
		}
	}
});