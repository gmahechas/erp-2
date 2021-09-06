import { ServerCredentials } from '@grpc/grpc-js'
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import { startupError } from '@gmahechas/erp-common-ms-utils-js';
import app from './app';
import env from './config/env';

const start = async () => {
	try {
		await connectDatabases();
		app.bindAsync(`0.0.0.0:${env.ms_port}`, ServerCredentials.createInsecure(), (error, port) => {
			if (error) {
				console.log('error');
			} else {
				app.start();
				console.log(`runnig on port ${port}`)
			}
		})
	} catch (error) {
		startupError(error);
	}
}

start();