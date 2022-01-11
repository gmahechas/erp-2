import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: process.env.ENVIRONMENT,
	'ms-1': {
		app: {
			name: process.env.ONE_APP_NAME,
			port: process.env.ONE_APP_PORT,
		},
		auth: {
			jwt: {
				privateKey: process.env.ONE_AUTH_JWT_PRIVATE_KEY
			}
		},
		databases: {
			mongo: {
				uri: process.env.ONE_DATABASES_MONGO_URI
			}
		}
	}
});