import { createOneCountrySchema, validate } from '@gmahechas/erp-common';
import { httpMethods, IRouteLambda } from '@gmahechas/erp-common-lambdajs';
import { getCountries } from '@gmahechas/erp-common-ms-3-js';

const routes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/rest/3/country',
		action: getCountries,
		validation: validate(createOneCountrySchema)
	}
];

export default routes;