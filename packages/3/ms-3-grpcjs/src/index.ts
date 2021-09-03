import { ServerCredentials } from '@grpc/grpc-js'
import app from './app';
import env from './config/env';

const start = async () => {
	app.bindAsync(`0.0.0.0:${env.ms_port}`, ServerCredentials.createInsecure(), (error, port) => {
		if (error) {
			console.log('error');
		} else {
			app.start();
			console.log(`runnig on port ${port}`)
		}
	})
}

start();