import {
	ICreateUser,
	IUser
} from '@gmahechas/erp-common';
import { User } from './user.mongo';

export const createOneUser = async (data: ICreateUser): Promise<IUser> => {
	const user = new User(data);
	return await user.save();
};