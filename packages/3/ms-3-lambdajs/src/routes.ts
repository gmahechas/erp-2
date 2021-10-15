import { validate, createOneCountrySchema, updateOneCountrySchema, deleteOneCountrySchema, searchOneCountrySchema } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry } from '@gmahechas/erp-common-ms-3-js';

const routes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/country/create/one',
		args: ['body'],
		validation: validate(createOneCountrySchema),
		action: createOneCountry
	},
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/country/update/one',
		args: ['body'],
		validation: validate(updateOneCountrySchema),
		action: updateOneCountry
	},
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/country/delete/one',
		args: ['body'],
		validation: validate(deleteOneCountrySchema),
		action: deleteOneCountry
	},
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/country/search/one',
		args: ['body'],
		validation: validate(searchOneCountrySchema),
		action: searchOneCountry
	}
];

export default routes;