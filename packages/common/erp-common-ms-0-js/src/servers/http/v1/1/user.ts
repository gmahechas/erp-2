import { IUser, ICreateUser, IUpdateUser, IDeleteUser, ISearchUser } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneUser = async (token: string, data: ICreateUser): Promise<IUser> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IUser }>('/rest/v1/1/user/create/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const updateOneUser = async (token: string, data: IUpdateUser): Promise<IUser | null> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).put<{ data: IUser }>('/rest/v1/1/user/update/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const deleteOneUser = async (token: string, data: IDeleteUser): Promise<IUser | null> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).delete<{ data: IUser }>('/rest/v1/1/user/delete/one', { data, headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchOneUser = async (token: string, data: Partial<ISearchUser>): Promise<IUser | null> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IUser }>('/rest/v1/1/user/search/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchManyUser = async (token: string, data: Partial<ISearchUser>[]): Promise<IUser[]> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IUser[] }>('/rest/v1/1/user/search/many', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};