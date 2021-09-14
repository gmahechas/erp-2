import { APIGatewayProxyEvent } from 'aws-lambda';
import { argsType } from '../route.interface';

export const actionArgs = (fields: argsType, event: APIGatewayProxyEvent) => {
	let args = {};
	for (const field of fields) {
		if (field == 'body') {
			const body = (event.body) ? JSON.parse(event.body) : null;
			args = { ...args, ...body };
		} else {
			args = { ...args, ...event[field] };
		}
	}
	return args;
}