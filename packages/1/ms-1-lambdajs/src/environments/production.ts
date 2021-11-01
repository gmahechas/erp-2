import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'production',
	ms: {
		one: {
			auth: {
				jwt: {
					publicKey: process.env.MS_ONE_AUTH_JWT_PUBLIC_KEY
				}
			},
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