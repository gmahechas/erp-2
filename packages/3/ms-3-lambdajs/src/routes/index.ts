import { IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { routes as countryRoutes } from './country.routes';
import { routes as estateRoutes } from './estate.routes';

const v1Routes: IRouteLambda[] = [
	...countryRoutes.map(route => route = { ...route, path: '/rest/v1/3/country'.concat(route.path) }),
	...estateRoutes.map(route => route = { ...route, path: '/rest/v1/3/estate'.concat(route.path) }),
];

export const routes: IRouteLambda[] = [
	...v1Routes
];