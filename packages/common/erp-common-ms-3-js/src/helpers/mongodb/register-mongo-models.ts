import { registerCountryModel } from '../../modules/v1/country/country.mongo';
import { registerEstateModel } from '../../modules/v1/estate/estate.mongo';
import { registerCityModel } from '../../modules/v1/city/city.mongo';

export const registerMongoModels = [registerCountryModel, registerEstateModel, registerCityModel];
