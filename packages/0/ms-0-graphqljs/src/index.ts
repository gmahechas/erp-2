import { generalHandlerError } from '@gmahechas/erp-common-ms-utils-js';
import bootstrap from './app';
import env from './config/env';

const start = async () => {
	try {
		const app = await bootstrap();
		app.listen(env.msPort, () => console.log(`runnig on port ${env.msPort}`));
	} catch (error) {
		generalHandlerError(error)
	}

};
start();

