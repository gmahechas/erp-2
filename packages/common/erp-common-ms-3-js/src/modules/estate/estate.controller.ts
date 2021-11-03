import { IEstate, ICreateEstate, IUpdateEstate, IDeleteEstate, ISearchEstate } from '@gmahechas/erp-common';
import { Estate } from './estate.mongo';

export const createOneEstate = async (data: ICreateEstate): Promise<IEstate> => {
	const result = await Estate.create(data);
	return result;
};

export const updateOneEstate = async (data: IUpdateEstate): Promise<IEstate | null> => {
	const result = await Estate.findOneAndUpdate({ id: data.id }, data);
	return Object.assign(result, data);
};

export const deleteOneEstate = async (data: IDeleteEstate): Promise<IEstate | null> => {
	const result = await Estate.findOneAndDelete(data);
	return result;	
};

export const searchOneEstate = async (data: Partial<ISearchEstate>): Promise<IEstate | null> => {
	const result = await Estate.findOne(data);
	return result;
};

export const searchManyEstate = async (data: Partial<ISearchEstate>[]): Promise<IEstate[]> => {
	const result = await Estate.find({ $or: data });
	return result;
};