import { generalHandlerError, initEnv, env, ConfigError } from '@gmahechas/erp-common-ms-utils-js';
import bootstrap from './app';

const start = async () => {
	try {
		await initEnv();
		const appPort = env?.app?.port;
		if (!appPort) {
			throw new ConfigError();
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

