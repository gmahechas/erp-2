import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: process.env.ENVIRONMENT,
	'ms-3': {
		app: {
			name: process.env.THREE_APP_NAME,
		},
		databases: {
			mongo: {
				uri: process.env.THREE_DATABASES_MONGO_URI
			}
		}
	}
});