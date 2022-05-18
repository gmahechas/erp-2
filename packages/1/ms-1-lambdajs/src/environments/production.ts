import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: process.env.ENVIRONMENT,
	'ms-1': {
		app: {
			name: process.env.APP_NAME,
		},
		databases: {
			mongo: {
				uri: undefined
			}
		},
		auth: {
			jwt: {
				privateKey: undefined,
				publicKey: undefined
			}
		},
	}
});