import { validate, createOneEstateSchema, updateOneEstateSchema, deleteOneEstateSchema, searchOneEstateSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate } from '@gmahechas/erp-common-ms-3-js';

export const routes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		validation: validate(createOneEstateSchema),
		action: createOneEstate
	},
	{
		httpMethod: httpMethods.POST,
		path: '/update/one',
		args: ['body'],
		validation: validate(updateOneEstateSchema),
		action: updateOneEstate
	},
	{
		httpMethod: httpMethods.POST,
		path: '/delete/one',
		args: ['body'],
		validation: validate(deleteOneEstateSchema),
		action: deleteOneEstate
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		validation: validate(searchOneEstateSchema),
		action: searchOneEstate
	}
];