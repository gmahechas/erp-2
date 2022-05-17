import { createOneUserSchema, updateOneUserSchema, deleteOneUserSchema, searchOneUserSchema, searchManyUserSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda, authenticationMiddleware, validatorMiddleware } from '@gmahechas/erp-common-lambdajs';
import { createOneUser, updateOneUser, deleteOneUser, searchOneUser, searchManyUser } from '@gmahechas/erp-common-ms-1-js';

export const userRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		action: createOneUser,
		middlewares: [authenticationMiddleware, validatorMiddleware(createOneUserSchema)],
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		action: updateOneUser,
		middlewares: [authenticationMiddleware, validatorMiddleware(updateOneUserSchema)],
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		action: deleteOneUser,
		middlewares: [authenticationMiddleware, validatorMiddleware(deleteOneUserSchema)],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		action: searchOneUser,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchOneUserSchema)],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		action: searchManyUser,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchManyUserSchema)],
	}
];