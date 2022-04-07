import { IGroup, ICreateGroup, IUpdateGroup, IDeleteGroup, ISearchGroup } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneGroup = async (data: ICreateGroup, token: string): Promise<IGroup> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IGroup }>('/rest/v1/1/group/create/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const updateOneGroup = async (data: IUpdateGroup, token: string): Promise<IGroup | null> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).put<{ data: IGroup }>('/rest/v1/1/group/update/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const deleteOneGroup = async (data: IDeleteGroup, token: string): Promise<IGroup | null> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).delete<{ data: IGroup }>('/rest/v1/1/group/delete/one', { data, headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchOneGroup = async (data: Partial<ISearchGroup>, token: string): Promise<IGroup | null> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IGroup }>('/rest/v1/1/group/search/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchManyGroup = async (data: Partial<ISearchGroup>[], token: string): Promise<IGroup[]> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IGroup[] }>('/rest/v1/1/group/search/many', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};