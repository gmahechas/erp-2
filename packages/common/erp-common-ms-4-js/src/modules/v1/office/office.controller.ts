import { IOffice, ICreateOffice, IUpdateOffice, IDeleteOffice, ISearchOffice } from '@gmahechas/erp-common-js';
import { Context, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { Office } from './office.mongo';

export const createOneOffice = async (data: ICreateOffice): Promise<IOffice> => {
	const { companyId } = Context.get('auth');
	const newData = Object.assign({}, data, { companyId });
	let result = await Office.create(newData);
	return result;
	
};

export const updateOneOffice = async (data: IUpdateOffice): Promise<IOffice | null> => {
	const { companyId } = Context.get('auth');
	const { officeId } = data;
	let entity = await Office.findOne({ officeId });
	if (!entity) {
		sendError(TypeErrorMessage.NOT_FOUND);
	}
	if (entity.companyId !== companyId) {
		sendError(TypeErrorMessage.AUTHORIZATION);
	}
	entity.set(data);
	return await entity.save();
};

export const deleteOneOffice = async (data: IDeleteOffice): Promise<IOffice | null> => {
	const { companyId } = Context.get('auth');
	const { officeId } = data;
	let entity = await Office.findOne({ officeId });
	if (!entity) {
		sendError(TypeErrorMessage.NOT_FOUND);
	}
	if (entity.companyId !== companyId) {
		sendError(TypeErrorMessage.AUTHORIZATION);
	}
	return await entity.remove();
};

export const searchOneOffice = async (data: Partial<ISearchOffice>): Promise<IOffice | null> => {
	const { companyId } = Context.get('auth');
	const newData = Object.assign({}, data, { companyId });
	const result = await Office.findOne(newData);
	return result;
};

export const searchManyOffice = async (data: Partial<ISearchOffice>[]): Promise<IOffice[]> => {
	const { companyId } = Context.get('auth');
	const newData = data.length === 0 ? [{ companyId }] : data.map((item) => Object.assign({}, item, { companyId }));
	const search = newData.length === 0 ? [{}] : newData;
	const result = await Office.find({ $or: search });
	return result;
};