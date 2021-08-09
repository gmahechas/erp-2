import { httpMethods, IRoute } from "@gmahechas/erp-common-expressjs";
import * as fromCountryController from '../modules/country/controller';

const routes: IRoute[] = [
	{
		httpMethod: httpMethods.POST,
		path: '/rest/:version/country',
		action: fromCountryController.getCountries,
	}
];

export default routes;