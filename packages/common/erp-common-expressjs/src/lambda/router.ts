import { match } from 'path-to-regexp';
import { IRoute } from './route.interface';

export const router = (event: any, routes: IRoute[]): IRoute => {
	const route = routes.find(route => {
		return event.httpMethod === route.httpMethod && match(route.path, { decode: decodeURIComponent })(event.path);
	});
	if (!route) {
		throw new Error('404 - pattern not found');
	}
	return route;
}