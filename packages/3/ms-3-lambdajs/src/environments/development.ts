import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: process.env.ENVIRONMENT,
	'ms-3': {
		app: {
			name: process.env.APP_NAME,
			port: process.env.APP_PORT,
		},
		databases: {
			mongo: {
				uri: process.env.MS_THREE_DATABASES_MONGO_URI
			}
		}
	}
});