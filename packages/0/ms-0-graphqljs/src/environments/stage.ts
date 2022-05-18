import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: process.env.ENVIRONMENT,
	'ms-0': {
		app: {
			name: process.env.APP_NAME,
			port: process.env.ZERO_APP_PORT,
		},
		session: {
			redis: {
				url: undefined
			},
			cookie_name: undefined,
			cookie_secret: undefined,
		},
		auth: {
			jwt: {
				publicKey: undefined
			}
		}
	},
	'ms-1': {
		app: {
			endpoint: process.env.ONE_APP_ENDPOINT,
		},
	},
	'ms-3': {
		app: {
			endpoint: process.env.THREE_APP_ENDPOINT,
		},
	}
});
