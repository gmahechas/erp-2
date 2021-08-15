import { createOneCountrySchema } from '@gmahechas/erp-common';
import { httpMethods, IRouteLambda, validatorLambda } from '@gmahechas/erp-common-lambdajs';
import { getCountries } from '@gmahechas/erp-common-ms-3-js';

const routes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/rest/:version/country',
		action: getCountries,
		validation: validatorLambda(createOneCountrySchema)
	}
];

export default routes;