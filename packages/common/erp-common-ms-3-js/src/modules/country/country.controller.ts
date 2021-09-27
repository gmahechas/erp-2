import {
	ICreateCountry,
	IUpdateCountry,
	IDeleteCountry,
	ISearchCountry,
	ICountry
} from '@gmahechas/erp-common';
import { Country } from './country.mongo';

export const createOneCountry = async (data: ICreateCountry): Promise<ICountry> => {
		const country = new Country(data);
		return await country.save();
};

export const updateOneCountry = async (data: IUpdateCountry): Promise<ICountry> => {
	return data;
};

export const deleteOneCountry = async (data: IDeleteCountry): Promise<ICountry> => {
	return { countryName: 'countryName', countryCode: 'countryCode', ...data };
};

export const searchOneCountry = async (data: ISearchCountry): Promise<ICountry> => {
	return data;
};