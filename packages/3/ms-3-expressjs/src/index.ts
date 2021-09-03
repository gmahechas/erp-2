import app from './app';
import env from './config/env';

const start = async () => {
	app.listen(env.ms_port, () => console.log(`runnig on port ${env.ms_port}`));
};

start();