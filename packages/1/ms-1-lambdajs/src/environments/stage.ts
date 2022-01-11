import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: process.env.ENVIRONMENT,
	'ms-1': {
		app: {
			name: process.env.APP_NAME,
			port: process.env.APP_PORT,
		},
		auth: {
			jwt: {
				privateKey: process.env.MS_ONE_AUTH_JWT_PRIVATE_KEY
			}
		},
		databases: {
			mongo: {
				uri: process.env.MS_ONE_DATABASES_MONGO_URI
			}
		}
	}
});