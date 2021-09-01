import { createOneCountrySchema, updateOneCountrySchema, deleteOneCountrySchema, searchOneCountrySchema, validate } from '@gmahechas/erp-common'
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { createOneCountry, updateOneCountry, deleteOneCountry, searchOneCountry } from '@gmahechas/erp-common-ms-3-js';

const routes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/country/create/one',
		action: createOneCountry,
		validation: validate(createOneCountrySchema)
	},
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/country/update/one',
		action: updateOneCountry,
		validation: validate(updateOneCountrySchema)
	},
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/country/delete/one',
		action: deleteOneCountry,
		validation: validate(deleteOneCountrySchema)
	},
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/country/search/one',
		action: searchOneCountry,
		validation: validate(searchOneCountrySchema)
	}
];

export default routes;