import { createOneOfficeSchema, updateOneOfficeSchema, deleteOneOfficeSchema, searchOneOfficeSchema, searchManyOfficeSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda, authenticationMiddleware, validatorMiddleware } from '@gmahechas/erp-common-lambdajs';
import { createOneOffice, updateOneOffice, deleteOneOffice, searchOneOffice, searchManyOffice } from '@gmahechas/erp-common-ms-4-js';

export const officeRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		action: createOneOffice,
		middlewares: [authenticationMiddleware, validatorMiddleware(createOneOfficeSchema)],
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		action: updateOneOffice,
		middlewares: [authenticationMiddleware, validatorMiddleware(updateOneOfficeSchema)],
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		action: deleteOneOffice,
		middlewares: [authenticationMiddleware, validatorMiddleware(deleteOneOfficeSchema)],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		action: searchOneOffice,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchOneOfficeSchema)],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		action: searchManyOffice,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchManyOfficeSchema)],
	}
];