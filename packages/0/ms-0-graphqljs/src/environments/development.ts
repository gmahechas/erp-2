import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'development',
	app: {
		port: process.env.APP_PORT
	},
	databases: {
		session: {
			redis: {
				url: process.env.REDIS_URL
			}
		}
	}
});
