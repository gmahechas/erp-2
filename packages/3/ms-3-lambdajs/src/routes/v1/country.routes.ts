import { createOneCountrySchema, updateOneCountrySchema, deleteOneCountrySchema, searchOneCountrySchema, searchManyCountrySchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda, authenticationMiddleware, validatorMiddleware } from '@gmahechas/erp-common-lambdajs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry, searchManyCountry } from '@gmahechas/erp-common-ms-3-js';

export const countryRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		action: createOneCountry,
		middlewares: [authenticationMiddleware, validatorMiddleware(createOneCountrySchema)],
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		action: updateOneCountry,
		middlewares: [authenticationMiddleware, validatorMiddleware(updateOneCountrySchema)],
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		action: deleteOneCountry,
		middlewares: [authenticationMiddleware, validatorMiddleware(deleteOneCountrySchema)],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		action: searchOneCountry,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchOneCountrySchema)],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		action: searchManyCountry,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchManyCountrySchema)],
	}
];