import { IPolicy, ICreatePolicy, IUpdatePolicy, IDeletePolicy, ISearchPolicy } from '@gmahechas/erp-common-js';
import { Context, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { Policy } from './policy.mongo';

export const createOnePolicy = async (data: ICreatePolicy): Promise<IPolicy> => {
	const { companyId } = Context.get('auth');
	const newData = Object.assign({}, data, { companyId });
	let result = await Policy.create(newData);
	return result;
};

export const updateOnePolicy = async (data: IUpdatePolicy): Promise<IPolicy | null> => {
	const { companyId } = Context.get('auth');
	const { policyId } = data;
	let entity = await Policy.findOne({ policyId, companyId });
	if (!entity) {
		sendError(TypeErrorMessage.NOT_FOUND);
	}
	if (entity.companyId !== companyId) {
		sendError(TypeErrorMessage.AUTHORIZATION);
	}	
	entity.set(data);
	return await entity.save();
};

export const deleteOnePolicy = async (data: IDeletePolicy): Promise<IPolicy | null> => {
	const { companyId } = Context.get('auth');
	const { policyId } = data;
	let entity = await Policy.findOne({ policyId, companyId });
	if (!entity) {
		sendError(TypeErrorMessage.NOT_FOUND);
	}
	if (entity.companyId !== companyId) {
		sendError(TypeErrorMessage.AUTHORIZATION);
	}	
	return await entity.remove();
};

export const searchOnePolicy = async (data: Partial<ISearchPolicy>): Promise<IPolicy | null> => {
	const { companyId, companyKey } = Context.get('auth');
	const newData = Object.assign({}, data, { companyId, companyKey });
	const result = await Policy.findOne(newData);
	return result;
};

export const searchManyPolicy = async (data: Partial<ISearchPolicy>[]): Promise<IPolicy[]> => {
	const { companyId } = Context.get('auth');
	const newData = data.length === 0 ? [{ companyId }] : data.map((item) => Object.assign({}, item, { companyId }));
	const search = newData.length === 0 ? [{}] : newData;
	const result = await Policy.find({ $or: search });
	return result;
};