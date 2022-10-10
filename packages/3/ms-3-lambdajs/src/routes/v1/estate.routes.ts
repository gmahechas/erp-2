import {
  createOneEstateSchema,
  updateOneEstateSchema,
  deleteOneEstateSchema,
  searchOneEstateSchema,
  searchManyEstateSchema,
} from '@gmahechas/erp-common-js';
import {
  httpMethods,
  IRouteLambda,
  authenticationMiddleware,
  validatorMiddleware,
  loggerMiddleware,
} from '@gmahechas/erp-common-lambdajs';
import {
  createOneEstate,
  updateOneEstate,
  deleteOneEstate,
  searchOneEstate,
  searchManyEstate,
} from '@gmahechas/erp-common-ms-3-js';

export const estateRoutes: IRouteLambda[] = [
  {
    httpMethod: httpMethods.POST,
    path: '/create/one',
    middlewares: [authenticationMiddleware, validatorMiddleware(createOneEstateSchema), loggerMiddleware],
    args: ['body'],
    action: createOneEstate,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.PUT,
    path: '/update/one',
    middlewares: [authenticationMiddleware, validatorMiddleware(updateOneEstateSchema), loggerMiddleware],
    args: ['body'],
    action: updateOneEstate,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.DELETE,
    path: '/delete/one',
    middlewares: [authenticationMiddleware, validatorMiddleware(deleteOneEstateSchema), loggerMiddleware],
    args: ['body'],
    action: deleteOneEstate,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.POST,
    path: '/search/one',
    middlewares: [authenticationMiddleware, validatorMiddleware(searchOneEstateSchema), loggerMiddleware],
    args: ['body'],
    action: searchOneEstate,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.POST,
    path: '/search/many',
    middlewares: [authenticationMiddleware, validatorMiddleware(searchManyEstateSchema), loggerMiddleware],
    args: ['body'],
    action: searchManyEstate,
    statusCode: 200,
  },
];
