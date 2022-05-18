import { generalHandlerError, initEnv, env, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { grpc } from '@gmahechas/erp-common-grpcjs';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import { app } from './app';

const start = async () => {
	try {
		await initEnv();
		await connectDatabases();
		const { name, port } = env['ms-3']!.app!;
		if (!name || !port) {
			sendError(TypeErrorMessage.CONFIG);
		}
		app.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
			if (!error) {
				app.start();
				console.log(`environment: ${env.environment}`);
				console.log(`${name} is runnig on: http://localhost:${port}`);
			}
		})
	} catch (error) {
		generalHandlerError(error);
	}
}
start();