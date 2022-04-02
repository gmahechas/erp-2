import { generalHandlerError, initEnv, env, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import { bootstrap } from './app';

const start = async () => {
	try {
		await initEnv();
		await connectDatabases();
		const { name, port } = env['ms-0']!.app!;
		if (!name || !port) {
			sendError(TypeErrorMessage.CONFIG);
		}
		const app = await bootstrap();
		app.listen(port, () => {
			console.log(`environment: ${env.environment}`);
			console.log(`${name} is runnig on: http://localhost:${port}`);
		});
	} catch (error) {
		generalHandlerError(error)
	}
};
start();

