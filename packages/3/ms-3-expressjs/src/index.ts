import { generalHandlerError, initEnv, env, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { connectDatabases, initKafkaProducers } from '@gmahechas/erp-common-ms-3-js';
import { app } from './app';

const start = async () => {
	try {
		await initEnv();
		await connectDatabases();
		await initKafkaProducers();
		const appPort = env?.app?.port;
		if (!appPort) {
			sendError(TypeErrorMessage.CONFIG);
		}
		app.listen(appPort, () => {
			console.log(`environment: ${env.environment}`);
			console.log(`runnig on port: ${appPort}`);
		});
	} catch (error) {
		generalHandlerError(error);
	}
};

start();