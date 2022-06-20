import { ICountry, ICreateCountry, IUpdateCountry, IDeleteCountry, ISearchCountry } from '@gmahechas/erp-common-js';
import { Country } from './country.mongo';

export const createOneCountry = async (data: ICreateCountry): Promise<ICountry> => {
	let result = await Country.create(data);
	return result;
};

export const updateOneCountry = async (data: IUpdateCountry): Promise<ICountry | null> => {
	let result = await Country.findOneAndUpdate({ countryId: data.countryId }, data);
	// result = Object.assign(result, data);
	return result;
};

export const deleteOneCountry = async (data: IDeleteCountry): Promise<ICountry | null> => {
	let result = await Country.findOneAndDelete(data);
	return result;
};

export const searchOneCountry = async (data: Partial<ISearchCountry>): Promise<ICountry | null> => {
	let result = await Country.findOne(data);
	return result;
};

export const searchManyCountry = async (data: Partial<ISearchCountry>[]): Promise<ICountry[]> => {
	const search = data.length === 0 ? [{}] : data;
	let result = await Country.find({ $or: search });
	return result;
};