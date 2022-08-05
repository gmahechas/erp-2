import { express } from '@gmahechas/erp-common-expressjs';
import { countryRouter } from './country.routes';
import { estateRouter } from './estate.routes';
import { cityRouter } from './city.routes';

const router = express.Router();

export const v1Routes = [
	router.use('/v1/3/country', countryRouter),
	router.use('/v1/3/estate', estateRouter),
	router.use('/v1/3/city', cityRouter),
];