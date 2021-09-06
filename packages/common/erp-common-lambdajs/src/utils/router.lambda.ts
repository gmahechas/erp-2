import { APIGatewayProxyEvent } from 'aws-lambda';
import { match } from 'path-to-regexp';
import { NotFoundError } from '@gmahechas/erp-common-ms-utils-js';
import { IRouteLambda } from '../route.interface';

export const routerLambda = (event: APIGatewayProxyEvent, routes: IRouteLambda[]): IRouteLambda => {
	const route = routes.find(route => {
		return event.httpMethod === route.httpMethod && match(route.path, { decode: decodeURIComponent })(event.path);
	});
	if (!route) {
		throw new NotFoundError();
	}
	return route;
}