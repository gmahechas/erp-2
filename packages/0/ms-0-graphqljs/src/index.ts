import bootstrap from './app';
import env from './config/env';

const start = async () => {
	const app = await bootstrap();
	app.listen(env.msPort, () => console.log(`runnig on port ${env.msPort}`));
};
start();

