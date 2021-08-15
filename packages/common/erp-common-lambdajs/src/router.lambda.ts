import { match } from 'path-to-regexp';
import { IRouteLambda } from './route.interface';

export const routerLambda = (event: any, routes: IRouteLambda[]): IRouteLambda => {
	const route = routes.find(route => {
		return event.httpMethod === route.httpMethod && match(route.path, { decode: decodeURIComponent })(event.path);
	});
	if (!route) {
		throw new Error('404 - pattern not found');
	}
	return route;
}