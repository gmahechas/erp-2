import { connectDatabases } from '@gmahechas/erp-common-ms-3-js';
import { startupError } from '@gmahechas/erp-common-ms-utils-js';
import app from './app';
import env from './config/env';

const start = async () => {
	try {
		await connectDatabases();
		app.listen(env.ms_port, () => console.log(`runnig on port ${env.ms_port}`));
	} catch (error) {
		startupError(error);
	}
};

start();