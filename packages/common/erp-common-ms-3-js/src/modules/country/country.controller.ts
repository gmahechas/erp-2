import {
	ICreateCountry,
	IUpdateCountry,
	IDeleteCountry,
	ISearchCountry,
	ICountry
} from '@gmahechas/erp-common';
import { env } from '@gmahechas/erp-common-ms-utils-js';
import { Country } from './country.mongo';

export const createOneCountry = async (data: ICreateCountry): Promise<ICountry> => {
		console.log('FROM CONTROLLER:::', env.environment)
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