import { validate, createOneOfficeSchema, updateOneOfficeSchema, deleteOneOfficeSchema, searchOneOfficeSchema, searchManyOfficeSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { createOneOffice, updateOneOffice, deleteOneOffice, searchOneOffice, searchManyOffice } from '@gmahechas/erp-common-ms-4-js';

export const officeRoutes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		validation: validate(createOneOfficeSchema),
		action: createOneOffice
	},
	{
		httpMethod: httpMethods.PUT,
		path: '/update/one',
		args: ['body'],
		validation: validate(updateOneOfficeSchema),
		action: updateOneOffice
	},
	{
		httpMethod: httpMethods.DELETE,
		path: '/delete/one',
		args: ['body'],
		validation: validate(deleteOneOfficeSchema),
		action: deleteOneOffice
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		validation: validate(searchOneOfficeSchema),
		action: searchOneOffice
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/many',
		args: ['body'],
		validation: validate(searchManyOfficeSchema),
		action: searchManyOffice
	}
];