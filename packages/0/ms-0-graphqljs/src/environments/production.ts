import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'production',
	app: {
		port: process.env.APP_PORT
	},
	ms: {
		zero: {
			session: {
				redis: {
					url: process.env.MS_ZERO_SESSION_REDIS_URL
				}
			}
		},
		one: {
			auth: {
				jwt: {
					publicKey: process.env.MS_ONE_AUTH_JWT_PUBLIC_KEY
				}
			},
			command: {
				url: process.env.MS_ONE_COMMAND_URL
			}
		},
		three: {
			command: {
				url: process.env.MS_THREE_COMMAND_URL
			}
		}
	}
});