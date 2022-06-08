import { createOneCountrySchema, updateOneCountrySchema, deleteOneCountrySchema, searchOneCountrySchema, searchManyCountrySchema } from '@gmahechas/erp-common-js'
import { httpMethods, IRouteLambda, authenticationMiddleware, validatorMiddleware, loggerMiddleware } from '@gmahechas/erp-common-lambdajs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry, searchManyCountry } from '@gmahechas/erp-common-ms-3-js';

export const countryRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		action: createOneCountry,
		middlewares: [authenticationMiddleware, validatorMiddleware(createOneCountrySchema), loggerMiddleware],
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		action: updateOneCountry,
		middlewares: [authenticationMiddleware, validatorMiddleware(updateOneCountrySchema), loggerMiddleware],
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		action: deleteOneCountry,
		middlewares: [authenticationMiddleware, validatorMiddleware(deleteOneCountrySchema), loggerMiddleware],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		action: searchOneCountry,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchOneCountrySchema), loggerMiddleware],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		action: searchManyCountry,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchManyCountrySchema), loggerMiddleware],
	}
];