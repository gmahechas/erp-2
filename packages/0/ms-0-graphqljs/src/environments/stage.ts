import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'stage',
	app: {
		port: process.env.APP_PORT
	},
	ms: {
		zero: {
			session: {
				redis: {
					url: process.env.MS_ZERO_SESSION_REDIS_URL
				}
			}
		}
	}
});