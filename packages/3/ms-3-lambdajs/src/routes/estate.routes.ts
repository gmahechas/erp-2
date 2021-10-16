import { validate, createOneEstateSchema, updateOneEstateSchema, deleteOneEstateSchema, searchOneEstateSchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { createOneEstate, updateOneEstate, deleteOneEstate, searchOneEstate } from '@gmahechas/erp-common-ms-3-js';

export const routes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/estate/create/one',
		args: ['body'],
		validation: validate(createOneEstateSchema),
		action: createOneEstate
	},
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/estate/update/one',
		args: ['body'],
		validation: validate(updateOneEstateSchema),
		action: updateOneEstate
	},
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/estate/delete/one',
		args: ['body'],
		validation: validate(deleteOneEstateSchema),
		action: deleteOneEstate
	},
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/estate/search/one',
		args: ['body'],
		validation: validate(searchOneEstateSchema),
		action: searchOneEstate
	}
];