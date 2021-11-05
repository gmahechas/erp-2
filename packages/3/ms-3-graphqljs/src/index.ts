import { generalHandlerError, initEnv, env, sendError } from '@gmahechas/erp-common-ms-utils-js';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import { bootstrap } from './app';

const start = async () => {
	try {
		await initEnv();
		await connectDatabases();
		const appPort = env?.app?.port;
		if (!appPort) {
			sendError('error_config')
		}
		const app = await bootstrap();
		app.listen(appPort, () => {
			console.log(`environment: ${env.environment}`);
			console.log(`runnig on port: ${appPort}`);
		});
	} catch (error) {
		generalHandlerError(error)
	}
};
start();

