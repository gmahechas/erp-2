import { createOneEstateSchema, updateOneEstateSchema, deleteOneEstateSchema, searchOneEstateSchema, searchManyEstateSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda, authenticationMiddleware, validatorMiddleware, loggerMiddleware } from '@gmahechas/erp-common-lambdajs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate, searchManyEstate } from '@gmahechas/erp-common-ms-3-js';

export const estateRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		action: createOneEstate,
		middlewares: [authenticationMiddleware, validatorMiddleware(createOneEstateSchema), loggerMiddleware],
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		action: updateOneEstate,
		middlewares: [authenticationMiddleware, validatorMiddleware(updateOneEstateSchema), loggerMiddleware],
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		action: deleteOneEstate,
		middlewares: [authenticationMiddleware, validatorMiddleware(deleteOneEstateSchema), loggerMiddleware],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		action: searchOneEstate,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchOneEstateSchema), loggerMiddleware],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		action: searchManyEstate,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchManyEstateSchema), loggerMiddleware],
	}
];