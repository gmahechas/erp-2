import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'development',
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
