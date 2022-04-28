import { validate, createOneEstateSchema, updateOneEstateSchema, deleteOneEstateSchema, searchOneEstateSchema, searchManyEstateSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda, authenticationMiddleware } from '@gmahechas/erp-common-lambdajs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate, searchManyEstate } from '@gmahechas/erp-common-ms-3-js';

export const estateRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		validation: validate(createOneEstateSchema),
		action: createOneEstate,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		validation: validate(updateOneEstateSchema),
		action: updateOneEstate,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		validation: validate(deleteOneEstateSchema),
		action: deleteOneEstate,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		validation: validate(searchOneEstateSchema),
		action: searchOneEstate,
		middlewares: [authenticationMiddleware],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		validation: validate(searchManyEstateSchema),
		action: searchManyEstate,
		middlewares: [authenticationMiddleware],
	}
];