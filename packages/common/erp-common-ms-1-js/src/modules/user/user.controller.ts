import {
	ICreateUser,
	ISearchUser,
	IUser
} from '@gmahechas/erp-common';
import { User } from './user.mongo';

export const createOneUser = async (data: ICreateUser): Promise<IUser> => {
	const user = new User(data);
	return await user.save();
};

export const searchOneUser = async (data: Partial<ISearchUser>): Promise<IUser | null> => {
	return await User.findOne(data);
};