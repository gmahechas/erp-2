import { express } from '@gmahechas/erp-common-expressjs';
import countryRouter from './country.routes';
import estateRouter from './estate.routes';

const router = express.Router();

const v1Routes = [
	router.use('/rest/v1/3/country', countryRouter),
	router.use('/rest/v1/3/estate', estateRouter),
];

export default [
	...v1Routes
];