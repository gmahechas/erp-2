import { registerCountryModel } from '../modules/country/country.mongo';
import { registerEstateModel } from '../modules/estate/estate.mongo';

export const registerMsMongoModels = [
	registerCountryModel,
	registerEstateModel
];

export const registerMsQueryMongoModels = [
];