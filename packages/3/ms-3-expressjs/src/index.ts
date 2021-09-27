import { generalHandlerError, initEnv, env } from '@gmahechas/erp-common-ms-utils-js';
import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import app from './app';

const start = async () => {
	try {
		await initEnv();
		await connectDatabases();
		app.listen(env.app.port, () => console.log(`runnig on port ${env.app.port}`));
	} catch (error) {
		generalHandlerError(error);
	}
};

start();50003