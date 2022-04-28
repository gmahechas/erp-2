import { validate, createOneCountrySchema, updateOneCountrySchema, deleteOneCountrySchema, searchOneCountrySchema, searchManyCountrySchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda, authenticationMiddleware } from '@gmahechas/erp-common-lambdajs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry, searchManyCountry } from '@gmahechas/erp-common-ms-3-js';

export const countryRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		validation: validate(createOneCountrySchema),
		action: createOneCountry,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		validation: validate(updateOneCountrySchema),
		action: updateOneCountry,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		validation: validate(deleteOneCountrySchema),
		action: deleteOneCountry,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		validation: validate(searchOneCountrySchema),
		action: searchOneCountry,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		validation: validate(searchManyCountrySchema),
		action: searchManyCountry,
		middlewares: [authenticationMiddleware],
	}
];