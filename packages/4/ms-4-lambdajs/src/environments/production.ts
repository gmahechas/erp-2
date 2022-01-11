import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: process.env.ENVIRONMENT,
	'ms-4': {
		app: {
			name: process.env.FOUR_APP_NAME,
		},
		databases: {
			mongo: {
				uri: process.env.FOUR_DATABASES_MONGO_URI
			}
		}
	}
});