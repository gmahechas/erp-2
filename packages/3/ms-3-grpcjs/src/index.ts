import { generalHandlerError, initEnv, env } from '@gmahechas/erp-common-ms-utils-js';
import { grpc } from '@gmahechas/erp-common-grpcjs';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import app from './app';

const start = async () => {
	try {
		await initEnv();
		await connectDatabases();
		app.bindAsync(`0.0.0.0:${env.app.port}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
			if (!error) {
				app.start();
				console.log(`environment: ${env.environment}`);
				console.log(`runnig on port: ${port}`);
			}
		})
	} catch (error) {
		generalHandlerError(error);
	}
}

start();