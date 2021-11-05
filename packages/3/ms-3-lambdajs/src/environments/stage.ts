import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = ({
	environment: 'stage',
	ms: {
		three: {
			databases: {
				mongo: {
					uri: process.env.MS_THREE_DATABASES_MONGO_URI
				}
			}
		}
	}
});