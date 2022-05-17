import { createOneCompanySchema, updateOneCompanySchema, deleteOneCompanySchema, searchOneCompanySchema, searchManyCompanySchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda, authenticationMiddleware, validatorMiddleware } from '@gmahechas/erp-common-lambdajs';
import { createOneCompany, updateOneCompany, deleteOneCompany, searchOneCompany, searchManyCompany } from '@gmahechas/erp-common-ms-4-js';

export const companyRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		action: createOneCompany,
		middlewares: [authenticationMiddleware, validatorMiddleware(createOneCompanySchema)],
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		action: updateOneCompany,
		middlewares: [authenticationMiddleware, validatorMiddleware(updateOneCompanySchema)],
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		action: deleteOneCompany,
		middlewares: [authenticationMiddleware, validatorMiddleware(deleteOneCompanySchema)],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		action: searchOneCompany,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchOneCompanySchema)],
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		action: searchManyCompany,
		middlewares: [authenticationMiddleware, validatorMiddleware(searchManyCompanySchema)],
	}
];