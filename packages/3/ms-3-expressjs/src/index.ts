import { generalHandlerError, initEnv, env, ConfigError } from '@gmahechas/erp-common-ms-utils-js';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import app from './app';

const start = async () => {
	try {
		await initEnv();
		await connectDatabases();
		const appPort = env?.app?.port;
		if (!appPort) {
			throw new ConfigError();
		}
		app.listen(appPort, () => {
			console.log(`environment: ${env.environment}`);
			console.log(`runnig on port: ${appPort}`);
		});
	} catch (error) {
		generalHandlerError(error);
	}
};

start();50003