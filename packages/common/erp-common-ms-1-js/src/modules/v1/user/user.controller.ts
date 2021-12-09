import { IUser, ICreateUser, IUpdateUser, IDeleteUser, ISearchUser } from '@gmahechas/erp-common';
import { User } from './user.mongo';

export const createOneUser = async (data: ICreateUser): Promise<IUser> => {
	const result = await User.create(data);
	return result;
};

export const updateOneUser = async (data: IUpdateUser): Promise<IUser | null> => {
	const result = await User.findOneAndUpdate({ id: data.id }, data);
	return Object.assign(result, data);
};

export const deleteOneUser = async (data: IDeleteUser): Promise<IUser | null> => {
	const result = await User.findOneAndDelete(data);
	return result;
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