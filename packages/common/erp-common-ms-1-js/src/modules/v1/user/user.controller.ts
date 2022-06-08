import { IUser, ICreateUser, IUpdateUser, IDeleteUser, ISearchUser } from '@gmahechas/erp-common-js';
import { Context, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { User } from './user.mongo';

export const createOneUser = async (data: ICreateUser): Promise<IUser> => {
	const { companyId, companyKey } = Context.get('auth');
	const newData = Object.assign({}, data, { companyId, companyKey });
	let result = await User.create(newData);
	return result;
};

export const updateOneUser = async (data: IUpdateUser): Promise<IUser | null> => {
	const { companyId } = Context.get('auth');
	const { id } = data;
	let entity = await User.findOne({ id });
	if (!entity) {
		sendError(TypeErrorMessage.NOT_FOUND);
	}
	if (entity.companyId !== companyId) {
		sendError(TypeErrorMessage.AUTHORIZATION);
	}	
	entity.set(data);
	return await entity.save();
};

export const deleteOneUser = async (data: IDeleteUser): Promise<IUser | null> => {
	const { companyId } = Context.get('auth');
	const { id } = data;
	let entity = await User.findOne({ id });
	if (!entity) {
		sendError(TypeErrorMessage.NOT_FOUND);
	}
	if (entity.companyId !== companyId) {
		sendError(TypeErrorMessage.AUTHORIZATION);
	}
	return await entity.remove();
};

export const searchOneUser = async (data: Partial<ISearchUser>): Promise<IUser | null> => {
	const { companyId, companyKey } = Context.get('auth');
	const newData = Object.assign({}, data, { companyId, companyKey });
	const result = await User.findOne(newData);
	return result;
};

export const searchManyUser = async (data: Partial<ISearchUser>[]): Promise<IUser[]> => {
	const { companyId, companyKey } = Context.get('auth');
	const newData = data.length === 0 ? [{ companyId, companyKey }] : data.map((item) => Object.assign({}, item, { companyId, companyKey })); 
	const search = newData.length === 0 ? [{}] : newData;
	const result = await User.find({ $or: search });
	return result;
};

export const searchOneUserToSignin = async (data: Partial<ISearchUser> | { companyKey: string }): Promise<IUser | null> => {
	const result = await User.aggregate([
		{ $match: data },
		{	$lookup: { from: 'groups', localField: 'groups', foreignField: 'id', as: 'groups' } },
		{ $lookup: { from: 'policies', localField: 'groups.policies', foreignField: 'id', as: 'groups.policies' }},
		{ $lookup: { from: 'policies', localField: 'policies', foreignField: 'id', as: 'policies' } },
	]);
	return result.length === 0 ? null : result[0];
};