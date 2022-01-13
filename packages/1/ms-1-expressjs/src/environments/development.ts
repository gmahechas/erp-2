import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: process.env.ENVIRONMENT,
	'ms-1': {
		app: {
			name: process.env.APP_NAME,
			port: process.env.ONE_APP_PORT,
		},
		auth: {
			jwt: {
				privateKey: undefined
			}
		},
		databases: {
			mongo: {
				uri: undefined
			}
		}
	}
});