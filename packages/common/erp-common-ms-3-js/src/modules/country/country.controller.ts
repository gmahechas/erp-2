import { ICountry, ICreateCountry, IUpdateCountry, IDeleteCountry, ISearchCountry	} from '@gmahechas/erp-common';
import { Country } from './country.mongo';

export const createOneCountry = async (data: ICreateCountry): Promise<ICountry> => {
		const country = new Country(data);
		return await country.save();
};

export const updateOneCountry = async (data: IUpdateCountry): Promise<ICountry> => {
	const { id, countryName, countryCode } = data;
	const country = await Country.findOneAndUpdate({ id }, { countryName, countryCode }) as ICountry;
	return country;
};

export const deleteOneCountry = async (data: IDeleteCountry): Promise<ICountry> => {
	const country = await Country.findOneAndDelete(data) as ICountry;
	return country;
};

export const searchOneCountry = async (data: ISearchCountry): Promise<ICountry> => {
	const country = await Country.findOne({ countryName: { $regex: data.countryName } }) as ICountry;
	return country;
};

export const searchManyCountry = async (data: ISearchCountry[]): Promise<ICountry[]> => {
	const countries = await Country.find({ $in: data }) as ICountry[];
	return countries;
};