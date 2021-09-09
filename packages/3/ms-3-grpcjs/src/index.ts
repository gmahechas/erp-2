import { ServerCredentials } from '@grpc/grpc-js'
import { connectToMongo, generalHandlerError } from '@gmahechas/erp-common-ms-utils-js';
import { registerMongoModels } from '@gmahechas/erp-common-ms-3-js';
import app from './app';
import env from './config/env';

const start = async () => {
	try {
		await connectToMongo({ uri: env.msMongodbUri }, 'createConnection', registerMongoModels);
		//await connectToMongo({ uri: env.msQueryMongodbUri }, 'createConnection', registerMongoModels);
		app.bindAsync(`0.0.0.0:${env.msPort}`, ServerCredentials.createInsecure(), (error, port) => {
			if (error) {
				console.log('error');
			} else {
				app.start();
				console.log(`runnig on port ${port}`)
			}
		})
	} catch (error) {
		generalHandlerError(error);
	}
}

start();