import { generalHandlerError, initEnv, env, sendError } from '@gmahechas/erp-common-ms-utils-js';
import { grpc } from '@gmahechas/erp-common-grpcjs';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import { app } from './app';

const start = async () => {
	try {
		await initEnv();
		await connectDatabases();
		const appPort = env?.app?.port;
		if (!appPort) {
			sendError('error_config');
		}
		app.bindAsync(`0.0.0.0:${appPort}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
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