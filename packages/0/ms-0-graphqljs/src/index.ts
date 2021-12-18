import { generalHandlerError, initEnv, env, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { bootstrap } from './app';

const start = async () => {
	try {
		await initEnv();
		const appPort = env?.app?.port;
		if (!appPort) {
			sendError(TypeErrorMessage.CONFIG);
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

