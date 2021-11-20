import { registerCountryModel } from '../../modules/v1/country/country.mongo';
import { registerEstateModel } from '../../modules/v1/estate/estate.mongo';

export const registerMongoModels = [
	registerCountryModel,
	registerEstateModel
];