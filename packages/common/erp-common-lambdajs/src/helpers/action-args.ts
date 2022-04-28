import { APIGatewayProxyEvent } from 'aws-lambda';
import { argsType } from '../interfaces/route.interface';

export const actionArgs = (fields: argsType, event: APIGatewayProxyEvent) => {
	let args = null;
	console.log(args);
	for (const field of fields) {
		if (field == 'body') {
			const body = (event.body) ? JSON.parse(event.body) : null;
			if (body instanceof Array) {
				args = [...body];
			} else {
				args = { ...body };
			}
		}
	}
	return args;
}