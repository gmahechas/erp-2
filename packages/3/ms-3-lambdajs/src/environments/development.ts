import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'development',
	ms: {
		three: {
			command: {
				databases: {
					mongo: {
						uri: process.env.MS_THREE_COMMAND_DATABASES_MONGO_URI
					}
				}
			},
			query: {
				databases: {
					mongo: {
						uri: process.env.MS_THREE_QUERY_DATABASES_MONGO_URI
					}
				}
			}
		}
	}
});