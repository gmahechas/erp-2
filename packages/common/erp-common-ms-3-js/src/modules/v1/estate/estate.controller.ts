import { IEstate, ICreateEstate, IUpdateEstate, IDeleteEstate, ISearchEstate } from '@gmahechas/erp-common-js';
import { Estate } from './estate.mongo';

export const createOneEstate = async (data: ICreateEstate): Promise<IEstate> => {
	let result = await Estate.create(data);
	return result;
};

export const updateOneEstate = async (data: IUpdateEstate): Promise<IEstate | null> => {
	let result = await Estate.findOneAndUpdate({ id: data.id }, data);
	result = Object.assign(result, data);
	return result;
};

export const deleteOneEstate = async (data: IDeleteEstate): Promise<IEstate | null> => {
	let result = await Estate.findOneAndDelete(data);
	return result;	
};

export const searchOneEstate = async (data: Partial<ISearchEstate>): Promise<IEstate | null> => {
	let result = await Estate.findOne(data);
	return result;
};

export const searchManyEstate = async (data: Partial<ISearchEstate>[]): Promise<IEstate[]> => {
	const search = data.length === 0 ? [{}] : data;
	let result = await Estate.find({ $or: search });
	return result;
};