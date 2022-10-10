import {
  createOneUserSchema,
  updateOneUserSchema,
  deleteOneUserSchema,
  searchOneUserSchema,
  searchManyUserSchema,
} from '@gmahechas/erp-common-js';
import {
  httpMethods,
  IRouteLambda,
  authenticationMiddleware,
  validatorMiddleware,
  loggerMiddleware,
} from '@gmahechas/erp-common-lambdajs';
import { createOneUser, updateOneUser, deleteOneUser, searchOneUser, searchManyUser } from '@gmahechas/erp-common-ms-1-js';

export const userRoutes: IRouteLambda[] = [
  {
    httpMethod: httpMethods.POST,
    path: '/create/one',
    middlewares: [authenticationMiddleware, validatorMiddleware(createOneUserSchema), loggerMiddleware],
    args: ['body'],
    action: createOneUser,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.PUT,
    path: '/update/one',
    middlewares: [authenticationMiddleware, validatorMiddleware(updateOneUserSchema), loggerMiddleware],
    args: ['body'],
    action: updateOneUser,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.DELETE,
    path: '/delete/one',
    middlewares: [authenticationMiddleware, validatorMiddleware(deleteOneUserSchema), loggerMiddleware],
    args: ['body'],
    action: deleteOneUser,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.POST,
    path: '/search/one',
    middlewares: [authenticationMiddleware, validatorMiddleware(searchOneUserSchema), loggerMiddleware],
    args: ['body'],
    action: searchOneUser,
    statusCode: 200,
  },
  {
    httpMethod: httpMethods.POST,
    path: '/search/many',
    middlewares: [authenticationMiddleware, validatorMiddleware(searchManyUserSchema), loggerMiddleware],
    args: ['body'],
    action: searchManyUser,
    statusCode: 200,
  },
];
