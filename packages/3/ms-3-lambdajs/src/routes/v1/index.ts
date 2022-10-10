import { IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { countryRoutes } from './country.routes';
import { estateRoutes } from './estate.routes';

export const v1Routes: IRouteLambda[] = [
  ...countryRoutes.map(
    (route) =>
      (route = { ...route, path: '/rest/v1/3/country'.concat(route.path) }),
  ),
  ...estateRoutes.map(
    (route) =>
      (route = { ...route, path: '/rest/v1/3/estate'.concat(route.path) }),
  ),
];
