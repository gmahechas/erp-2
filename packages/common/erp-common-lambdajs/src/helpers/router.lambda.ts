import { APIGatewayProxyEvent } from 'aws-lambda';
import { match } from 'path-to-regexp';
import { sendError } from '@gmahechas/erp-common-ms-utils-js';
import { IRouteLambda } from '../interfaces/route.interface';

export const routerLambda = (event: APIGatewayProxyEvent, routes: IRouteLambda[]): IRouteLambda => {
	const route = routes.find(route => {
		return event.httpMethod === route.httpMethod && match(route.path, { decode: decodeURIComponent })(event.path);
	});
	if (!route) {
		sendError('not_found')
	}
	return route;
}