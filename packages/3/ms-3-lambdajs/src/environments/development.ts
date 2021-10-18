import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'development',
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