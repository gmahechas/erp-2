import {
  createOneCountrySchema,
  updateOneCountrySchema,
  deleteOneCountrySchema,
  searchOneCountrySchema,
  searchManyCountrySchema,
} from '@gmahechas/erp-common-js';
import {
  httpMethods,
  IRouteLambda,
  authenticationMiddleware,
  validatorMiddleware,
  loggerMiddleware,
} from '@gmahechas/erp-common-lambdajs';
import {
  createOneCountry,
  updateOneCountry,
  deleteOneCountry,
  searchOneCountry,
  searchManyCountry,
} from '@gmahechas/erp-common-ms-3-js';

export const countryRoutes: IRouteLambda[] = [
  {
    httpMethod: httpMethods.POST,
    path: '/create/one',
    middlewares: [authenticationMiddleware, validatorMiddleware(createOneCountrySchema), loggerMiddleware],
    args: ['body'],
    action: createOneCountry,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.PUT,
    path: '/update/one',
    middlewares: [authenticationMiddleware, validatorMiddleware(updateOneCountrySchema), loggerMiddleware],
    args: ['body'],
    action: updateOneCountry,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.DELETE,
    path: '/delete/one',
    action: deleteOneCountry,
    args: ['body'],
    middlewares: [authenticationMiddleware, validatorMiddleware(deleteOneCountrySchema), loggerMiddleware],
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.POST,
    path: '/search/one',
    action: searchOneCountry,
    args: ['body'],
    middlewares: [authenticationMiddleware, validatorMiddleware(searchOneCountrySchema), loggerMiddleware],
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.POST,
    path: '/search/many',
    action: searchManyCountry,
    args: ['body'],
    middlewares: [authenticationMiddleware, validatorMiddleware(searchManyCountrySchema), loggerMiddleware],
    statusCode: 200,
  },
];
