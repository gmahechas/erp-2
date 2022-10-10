import { IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { companyRoutes } from './company.routes';
import { officeRoutes } from './office.routes';

export const v1Routes: IRouteLambda[] = [
  ...companyRoutes.map(
    (route) =>
      (route = { ...route, path: '/rest/v1/4/company'.concat(route.path) }),
  ),
  ...officeRoutes.map(
    (route) =>
      (route = { ...route, path: '/rest/v1/4/office'.concat(route.path) }),
  ),
];
