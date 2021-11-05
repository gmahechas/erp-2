import { IUser, ICreateUser, IUpdateUser, IDeleteUser, ISearchUser } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneUser = async (data: ICreateUser): Promise<IUser> => {
	const { data: response } = await axiosClient(env.ms!.one!.url!).post<{ data: IUser }>('/rest/v1/1/user/create/one', data);
	return response.data;
};

export const updateOneUser = async (data: IUpdateUser): Promise<IUser | null> => {
	const { data: response } = await axiosClient(env.ms!.one!.url!).put<{ data: IUser }>('/rest/v1/1/user/update/one', data);
	return response.data;
};

export const deleteOneUser = async (data: IDeleteUser): Promise<IUser | null> => {
	const { data: response } = await axiosClient(env.ms!.one!.url!).delete<{ data: IUser }>('/rest/v1/1/user/delete/one', { data });
	return response.data;
};

export const searchOneUser = async (data: Partial<ISearchUser>): Promise<IUser | null> => {
	const { data: response } = await axiosClient(env.ms!.one!.url!).post<{ data: IUser }>('/rest/v1/1/user/search/one', data);
	return response.data;
};

export const searchManyUser = async (data: Partial<ISearchUser>[]): Promise<IUser[]> => {
	const { data: response } = await axiosClient(env.ms!.one!.url!).post<{ data: IUser[] }>('/rest/v1/1/user/search/many', data);
	return response.data;
};