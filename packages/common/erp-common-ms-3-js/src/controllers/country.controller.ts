import {
	ICreateCountry,
	IUpdateCountry,
	IDeleteCountry,
	ISearchCountry,
	ICountry,
	NotFoundError
} from '@gmahechas/erp-common';

export const createOneCountry = async (data: ICreateCountry): Promise<ICountry> => {
	return { id: '1', ...data };
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