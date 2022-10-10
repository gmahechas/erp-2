import {
  createOneCompanySchema,
  updateOneCompanySchema,
  deleteOneCompanySchema,
  searchOneCompanySchema,
  searchManyCompanySchema,
} from '@gmahechas/erp-common-js';
import {
  httpMethods,
  IRouteLambda,
  authenticationMiddleware,
  validatorMiddleware,
  loggerMiddleware,
} from '@gmahechas/erp-common-lambdajs';
import {
  createOneCompany,
  updateOneCompany,
  deleteOneCompany,
  searchOneCompany,
  searchManyCompany,
} from '@gmahechas/erp-common-ms-4-js';

export const companyRoutes: IRouteLambda[] = [
  {
    httpMethod: httpMethods.POST,
    path: '/create/one',
    middlewares: [
      authenticationMiddleware,
      validatorMiddleware(createOneCompanySchema),
      loggerMiddleware,
    ],
    args: ['body'],
    action: createOneCompany,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.PUT,
    path: '/update/one',
    middlewares: [
      authenticationMiddleware,
      validatorMiddleware(updateOneCompanySchema),
      loggerMiddleware,
    ],
    args: ['body'],
    action: updateOneCompany,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.DELETE,
    path: '/delete/one',
    middlewares: [
      authenticationMiddleware,
      validatorMiddleware(deleteOneCompanySchema),
      loggerMiddleware,
    ],
    args: ['body'],
    action: deleteOneCompany,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.POST,
    path: '/search/one',
    middlewares: [
      authenticationMiddleware,
      validatorMiddleware(searchOneCompanySchema),
      loggerMiddleware,
    ],
    args: ['body'],
    action: searchOneCompany,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.POST,
    path: '/search/many',
    middlewares: [
      authenticationMiddleware,
      validatorMiddleware(searchManyCompanySchema),
      loggerMiddleware,
    ],
    args: ['body'],
    action: searchManyCompany,
    statusCode: 200,
  },
];
