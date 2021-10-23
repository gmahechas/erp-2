import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'stage',
	app: {
		port: process.env.APP_PORT
	},
	ms: {
		one: {
			command: {
				databases: {
					mongo: {
						uri: process.env.MS_ONE_COMMAND_DATABASES_MONGO_URI
					}
				}
			},
			query: {
				databases: {
					mongo: {
						uri: process.env.MS_ONE_QUERY_DATABASES_MONGO_URI
					}
				}
			}
		}
	}
});