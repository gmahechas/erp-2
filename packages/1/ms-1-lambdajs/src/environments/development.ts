import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: process.env.ENVIRONMENT,
	'ms-1': {
		app: {
			name: process.env.APP_NAME,
		},
		auth: {
			jwt: {
				privateKey: process.env.ONE_AUTH_JWT_PRIVATE_KEY
			}
		},
		databases: {
			mongo: {
				uri: undefined 
			}
		}
	}
});