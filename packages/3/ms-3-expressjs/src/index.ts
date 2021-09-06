import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import { startupError } from '@gmahechas/erp-common-ms-utils-js';
import { mongo } from 'mongoose';
import app from './app';
import env from './config/env';

const start = async () => {
	try {
		await connectDatabases({ uri: env.msMongodbUri });
		app.listen(env.msPort, () => console.log(`runnig on port ${env.msPort}`));
	} catch (error) {
		startupError(error);
	}
};

start();