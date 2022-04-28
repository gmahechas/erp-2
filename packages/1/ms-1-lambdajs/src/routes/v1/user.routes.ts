import { validate, createOneUserSchema, updateOneUserSchema, deleteOneUserSchema, searchOneUserSchema, searchManyUserSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda, authenticationMiddleware } from '@gmahechas/erp-common-lambdajs';
import { createOneUser, updateOneUser, deleteOneUser, searchOneUser, searchManyUser } from '@gmahechas/erp-common-ms-1-js';

export const userRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		validation: validate(createOneUserSchema),
		action: createOneUser,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		validation: validate(updateOneUserSchema),
		action: updateOneUser,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		validation: validate(deleteOneUserSchema),
		action: deleteOneUser,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		validation: validate(searchOneUserSchema),
		action: searchOneUser,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		validation: validate(searchManyUserSchema),
		action: searchManyUser,
		middlewares: [authenticationMiddleware],
	}
];