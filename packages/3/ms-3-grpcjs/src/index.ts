import { ServerCredentials } from '@grpc/grpc-js'
import { generalHandlerError } from '@gmahechas/erp-common-ms-utils-js';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import app from './app';
import env from './config/env';

const start = async () => {
	try {
		await connectDatabases();
		app.bindAsync(`0.0.0.0:${env.msPort}`, ServerCredentials.createInsecure(), (error, port) => {
			if (error) {
				console.log('error');
			} else {
				app.start();
				console.log(`runnig on port ${port}`)
			}
		})
	} catch (error) {
		generalHandlerError(error);
	}
}

start();