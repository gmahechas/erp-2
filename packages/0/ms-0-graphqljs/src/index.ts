import bootstrap from './app';

const start = async () => {
	const app = await bootstrap();
	app.listen(50000, () => console.log('runnig on port 50000'));
};
start();

