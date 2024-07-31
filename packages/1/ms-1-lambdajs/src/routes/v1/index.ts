import { IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { authRoutes } from './auth.routes';
import { userRoutes } from './user.routes';

export const v1Routes: IRouteLambda[] = [
  ...authRoutes.map((route) => (route = { ...route, path: '/rest/v1/1/auth'.concat(route.path) })),
  ...userRoutes.map((route) => (route = { ...route, path: '/rest/v1/1/user'.concat(route.path) })),
];
