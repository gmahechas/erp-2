import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'stage',
	app: {
		port: process.env.APP_PORT
	},
	databases: {
		cqrs: {
			mongo: {
				command: {
					uri: process.env.DATABASES_CQRS_MONGO_COMMAND_URI,
				},
				query: {
					uri: process.env.DATABASES_CQRS_MONGO_QUERY_URI
				}
			}
		}
	}
});