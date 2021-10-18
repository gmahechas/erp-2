import { validate, createOneCountrySchema, updateOneCountrySchema, deleteOneCountrySchema, searchOneCountrySchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry } from '@gmahechas/erp-common-ms-3-js';

export const routes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/create/one',
		args: ['body'],
		validation: validate(createOneCountrySchema),
		action: createOneCountry
	},
	{
		httpMethod: httpMethods.POST,
		path: '/update/one',
		args: ['body'],
		validation: validate(updateOneCountrySchema),
		action: updateOneCountry
	},
	{
		httpMethod: httpMethods.POST,
		path: '/delete/one',
		args: ['body'],
		validation: validate(deleteOneCountrySchema),
		action: deleteOneCountry
	},
	{
		httpMethod: httpMethods.POST,
		path: '/search/one',
		args: ['body'],
		validation: validate(searchOneCountrySchema),
		action: searchOneCountry
	}
];