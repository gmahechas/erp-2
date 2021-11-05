import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'development',
	app: {
		port: process.env.APP_PORT
	},
	ms: {
		one: {
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
	}
});