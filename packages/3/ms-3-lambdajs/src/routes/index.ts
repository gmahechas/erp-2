import { IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { routes as countryRoutes } from './country.routes';
import { routes as estateRoutes } from './estate.routes';

export const routes: IRouteLambda[] = [
	...countryRoutes,
	...estateRoutes
];