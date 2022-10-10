import {
  createOneOfficeSchema,
  updateOneOfficeSchema,
  deleteOneOfficeSchema,
  searchOneOfficeSchema,
  searchManyOfficeSchema,
} from '@gmahechas/erp-common-js';
import {
  httpMethods,
  IRouteLambda,
  authenticationMiddleware,
  validatorMiddleware,
} from '@gmahechas/erp-common-lambdajs';
import {
  createOneOffice,
  updateOneOffice,
  deleteOneOffice,
  searchOneOffice,
  searchManyOffice,
} from '@gmahechas/erp-common-ms-4-js';

export const officeRoutes: IRouteLambda[] = [
  {
    httpMethod: httpMethods.POST,
    path: '/create/one',
    middlewares: [
      authenticationMiddleware,
      validatorMiddleware(createOneOfficeSchema),
    ],
    args: ['body'],
    action: createOneOffice,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.PUT,
    path: '/update/one',
    middlewares: [
      authenticationMiddleware,
      validatorMiddleware(updateOneOfficeSchema),
    ],
    args: ['body'],
    action: updateOneOffice,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.DELETE,
    path: '/delete/one',
    middlewares: [
      authenticationMiddleware,
      validatorMiddleware(deleteOneOfficeSchema),
    ],
    args: ['body'],
    action: deleteOneOffice,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.POST,
    path: '/search/one',
    middlewares: [
      authenticationMiddleware,
      validatorMiddleware(searchOneOfficeSchema),
    ],
    args: ['body'],
    action: searchOneOffice,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.POST,
    path: '/search/many',
    middlewares: [
      authenticationMiddleware,
      validatorMiddleware(searchManyOfficeSchema),
    ],
    args: ['body'],
    action: searchManyOffice,
    statusCode: 200,
  },
];
