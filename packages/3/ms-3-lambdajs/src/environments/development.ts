import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: process.env.ENVIRONMENT,
	'ms-3': {
		app: {
			name: process.env.APP_NAME,
		},
		databases: {
			mongo: {
				uri: undefined 
			}
		}
	}
});