import { httpMethods, IRouteLambda } from "@gmahechas/erp-common-lambdajs";
import * as fromCountryController from '../modules/country/controller';

const routes: IRouteLambda[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/rest/:version/country',
		action: fromCountryController.getCountries,
	}
];

export default routes;