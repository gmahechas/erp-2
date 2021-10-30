import { ICountry, ICreateCountry, IUpdateCountry, IDeleteCountry, ISearchCountry } from '@gmahechas/erp-common';
import { Country } from './country.mongo';

export const createOneCountry = async (data: ICreateCountry): Promise<ICountry> => {
	const result = await Country.create(data);
	return result;
};

export const updateOneCountry = async (data: IUpdateCountry): Promise<ICountry | null> => {
	const { id, countryName, countryCode } = data;
	const result = await Country.updateOne({ id }, { countryName, countryCode });
	if (result.modifiedCount == 1) {
		return { id, countryName, countryCode };
	} else {
		return null;
	}
};

export const deleteOneCountry = async (data: IDeleteCountry): Promise<ICountry | null> => {
	const result = await Country.deleteOne(data);
	if (result.deletedCount == 1) {
		return { id: data.id, countryName: 'fixme', countryCode: 'fixme' };
	} else {
		return null;
	}
};

export const searchOneCountry = async (data: ISearchCountry): Promise<ICountry | null> => {
	const { id } = data;
	const result = await Country.findOne({ id });
	return result;
};

export const searchManyCountry = async (data: ISearchCountry[]): Promise<ICountry[]> => {
	const result = await Country.find({ $or: data });
	return result;
};