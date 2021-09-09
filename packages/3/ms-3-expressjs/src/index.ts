import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import { generalHandlerError } from '@gmahechas/erp-common-ms-utils-js';
import app from './app';
import env from './config/env';

const start = async () => {
	try {
		await connectDatabases({ uri: env.msMongodbUri }, 'createConnection');
		await connectDatabases({ uri: env.msQueryMongodbUri }, 'createConnection');
		app.listen(env.msPort, () => console.log(`runnig on port ${env.msPort}`));
	} catch (error) {
		generalHandlerError(error);
	}
};

start();