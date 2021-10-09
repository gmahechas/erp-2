import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'development',
	app: {
		port: process.env.APP_PORT
	},
	mongo: {
		command: {
			uri: process.env.MONGO_COMMAND_URI,
		},
		query: {
			uri: process.env.MONGO_QUERY_URI
		}
	}
});
