import { IOffice, ICreateOffice, IUpdateOffice, IDeleteOffice, ISearchOffice } from '@gmahechas/erp-common-js';
import { Office } from './office.mongo';

export const createOneOffice = async (data: ICreateOffice): Promise<IOffice> => {
	let result = await Office.create(data);
	return result;
};

export const updateOneOffice = async (data: IUpdateOffice): Promise<IOffice | null> => {
	let result = await Office.findOneAndUpdate({ id: data.id }, data);
	result = Object.assign(result, data);
	return result;
};

export const deleteOneOffice = async (data: IDeleteOffice): Promise<IOffice | null> => {
	let result = await Office.findOneAndDelete(data);
	return result;
};

export const searchOneOffice = async (data: Partial<ISearchOffice>): Promise<IOffice | null> => {
	let result = await Office.findOne(data);
	return result;
};

export const searchManyOffice = async (data: Partial<ISearchOffice>[]): Promise<IOffice[]> => {
	const search = data.length === 0 ? [{}] : data;
	let result = await Office.find({ $or: search });
	return result;
};