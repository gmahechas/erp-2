import { IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { routes as authRoutes } from './auth.routes';
import { routes as userRoutes } from './user.routes';

const v1Routes: IRouteLambda[] = [
	...authRoutes.map(route => route = { ...route, path: '/rest/v1/1/auth'.concat(route.path) }),
	...userRoutes.map(route => route = { ...route, path: '/rest/v1/1/user'.concat(route.path) }),
];

export const routes: IRouteLambda[] = [
	...v1Routes
];