import { ICity, ICreateCity, IUpdateCity, IDeleteCity, ISearchCity } from '@gmahechas/erp-common';
import { City } from './city.mongo';

export const createOneCity = async (data: ICreateCity): Promise<ICity> => {
	let result = await City.create(data);
	return result;
};

export const updateOneCity = async (data: IUpdateCity): Promise<ICity | null> => {
	let result = await City.findOneAndUpdate({ id: data.id }, data);
	result = Object.assign(result, data);
	return result;
};

export const deleteOneCity = async (data: IDeleteCity): Promise<ICity | null> => {
	let result = await City.findOneAndDelete(data);
	return result;
};

export const searchOneCity = async (data: Partial<ISearchCity>): Promise<ICity | null> => {
	let result = await City.findOne(data);
	return result;
};

export const searchManyCity = async (data: Partial<ISearchCity>[]): Promise<ICity[]> => {
	const search = data.length === 0 ? [{}] : data;
	let result = await City.find({ $or: search });
	return result;
};