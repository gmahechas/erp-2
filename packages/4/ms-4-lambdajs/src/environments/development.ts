import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'development',
	ms: {
		four: {
			databases: {
				mongo: {
					uri: process.env.MS_FOUR_DATABASES_MONGO_URI
				}
			}
		}
	}
});