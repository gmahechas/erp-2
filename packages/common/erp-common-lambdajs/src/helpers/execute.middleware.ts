import { APIGatewayProxyEvent } from 'aws-lambda';

export const executeMiddlewares = async (event: APIGatewayProxyEvent, middlewares: Array<(...rest: any) => Promise<any>>) => {
	for (const middleware of middlewares) {
		const exe = await executeMiddleware(middleware);
		await exe(event);
	}
}

export const executeMiddleware = async (middleware: Function) => {
	return (event: APIGatewayProxyEvent) => middleware(event); 
}


