import { generalHandlerError } from '@gmahechas/erp-common-ms-utils-js';
import { grpc } from '@gmahechas/erp-common-grpcjs';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import app from './app';
import env from './config/env';

const start = async () => {
	try {
		await connectDatabases();
		app.bindAsync(`0.0.0.0:${env.msPort}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
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