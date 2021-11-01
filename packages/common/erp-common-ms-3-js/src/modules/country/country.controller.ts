import { ICountry, ICreateCountry, IUpdateCountry, IDeleteCountry, ISearchCountry } from '@gmahechas/erp-common';
import { Country } from './country.mongo';

export const createOneCountry = async (data: ICreateCountry): Promise<ICountry> => {
	const result = await Country.create(data);
	return result;
};

export const updateOneCountry = async (data: IUpdateCountry): Promise<ICountry | null> => {
	const result = await Country.findOneAndUpdate({ id: data.id }, data);
	return result;
};

export const deleteOneCountry = async (data: IDeleteCountry): Promise<ICountry | null> => {
	const result = await Country.findOneAndDelete(data);
	return result;
};

export const searchOneCountry = async (data: ISearchCountry): Promise<ICountry | null> => {
	const result = await Country.findOne({ id: data.id });
	return result;
};

export const searchManyCountry = async (data: ISearchCountry[]): Promise<ICountry[]> => {
	const result = await Country.find({ $or: data });
	return result;
};