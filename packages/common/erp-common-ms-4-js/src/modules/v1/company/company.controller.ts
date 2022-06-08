import { ICompany, ICreateCompany, IUpdateCompany, IDeleteCompany, ISearchCompany } from '@gmahechas/erp-common-js';
import { Company } from './company.mongo';

export const createOneCompany = async (data: ICreateCompany): Promise<ICompany> => {
	let result = await Company.create(data);
	return result;
};

export const updateOneCompany = async (data: IUpdateCompany): Promise<ICompany | null> => {
	let result = await Company.findOneAndUpdate({ id: data.id }, data);
	result = Object.assign(result, data);
	return result;
};

export const deleteOneCompany = async (data: IDeleteCompany): Promise<ICompany | null> => {
	let result = await Company.findOneAndDelete(data);
	return result;
};

export const searchOneCompany = async (data: Partial<ISearchCompany>): Promise<ICompany | null> => {
	let result = await Company.findOne(data);
	return result;
};

export const searchManyCompany = async (data: Partial<ISearchCompany>[]): Promise<ICompany[]> => {
	const search = data.length === 0 ? [{}] : data;
	let result = await Company.find({ $or: search });
	return result;
};