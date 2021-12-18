import { IUser, ICreateUser, IUpdateUser, IDeleteUser, ISearchUser } from '@gmahechas/erp-common';
import { sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { User } from './user.mongo';

export const createOneUser = async (data: ICreateUser): Promise<IUser> => {
	const result = await User.create(data);
	return result;
};

export const updateOneUser = async (data: IUpdateUser): Promise<IUser | null> => {
	const { id, companyId } = data;
	let entity = await User.findOne({ id });
	if (!entity) {
		sendError(TypeErrorMessage.NOT_FOUND);
	}
	if(entity.companyId !== companyId) {
		sendError(TypeErrorMessage.AUTHORIZATION);
	}	
	entity.set(data);
	return await entity.save();
};

export const deleteOneUser = async (data: IDeleteUser): Promise<IUser | null> => {
	const { id, companyId } = data;
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
	const result = await User.findOne(data);
	return result;
};

export const searchManyUser = async (data: Partial<ISearchUser>[]): Promise<IUser[]> => {
	const search = data.length === 0 ? [{}] : data;
	const result = await User.find({ $or: search });
	return result;
};