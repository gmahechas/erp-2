import { connectToMongo, generalHandlerError } from '@gmahechas/erp-common-ms-utils-js';
import { registerMsMongoModels, registerMsQueryMongoModels } from '@gmahechas/erp-common-ms-3-js';
import app from './app';
import env from './config/env';

const start = async () => {
	try {
		await connectToMongo({ uri: env.msMongodbUri }, 'createConnection', registerMsMongoModels);
		//await connectToMongo({ uri: env.msQueryMongodbUri }, 'createConnection', registerMsQueryMongoModels);
		app.listen(env.msPort, () => console.log(`runnig on port ${env.msPort}`));
	} catch (error) {
		generalHandlerError(error);
	}
};

start();