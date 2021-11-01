import { generalHandlerError, initEnv, env, sendError } from '@gmahechas/erp-common-ms-utils-js';
import { connectDatabases } from '@gmahechas/erp-common-ms-1-js';
import app from './app';

const start = async () => {
	try {
		await initEnv();
		await connectDatabases({ command: true });
		const appPort = env?.app?.port;
		if (!appPort) {
			sendError('error_config')
		}
		app.listen(appPort, () => {
			console.log(`environment: ${env.environment}`);
			console.log(`runnig on port: ${appPort}`);
		});
	} catch (error) {
		generalHandlerError(error);
	}
};

start(); 50003