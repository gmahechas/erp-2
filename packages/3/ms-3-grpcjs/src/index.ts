import { ServerCredentials } from '@grpc/grpc-js'
import app from './app';

const start = async () => {
	app.bindAsync('0.0.0.0:50003', ServerCredentials.createInsecure(), (error, port) => {
		if (error) {
			console.log('error');
		} else {
			app.start();
			console.log(`runnig on port ${port}`)
		}
	})
}

start();