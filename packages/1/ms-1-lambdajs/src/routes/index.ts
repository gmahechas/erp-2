import { IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { routes as userRoutes } from './user.routes';

export const routes: IRouteLambda[] = [
	...userRoutes,
];