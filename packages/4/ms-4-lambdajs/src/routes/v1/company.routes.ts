import { validate, createOneCompanySchema, updateOneCompanySchema, deleteOneCompanySchema, searchOneCompanySchema, searchManyCompanySchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { createOneCompany, updateOneCompany, deleteOneCompany, searchOneCompany, searchManyCompany } from '@gmahechas/erp-common-ms-4-js';

export const companyRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		validation: validate(createOneCompanySchema),
		action: createOneCompany
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		validation: validate(updateOneCompanySchema),
		action: updateOneCompany
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		validation: validate(deleteOneCompanySchema),
		action: deleteOneCompany
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		validation: validate(searchOneCompanySchema),
		action: searchOneCompany
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		validation: validate(searchManyCompanySchema),
		action: searchManyCompany
	}
];