import { generalHandlerError, initEnv, env } from '@gmahechas/erp-common-ms-utils-js';
import bootstrap from './app';
import { connectDatabases } from './connect-databases';

const start = async () => {
	try {
		await initEnv();
		await connectDatabases();
		const app = await bootstrap();
		app.listen(env.app.port, () => {
			console.log(`environment: ${env.environment}`);
			console.log(`runnig on port: ${env.app.port}`);
		});
	} catch (error) {
		generalHandlerError(error)
	}

};
start();

