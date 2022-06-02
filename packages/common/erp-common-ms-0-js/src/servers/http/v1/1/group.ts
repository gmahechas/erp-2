import { IGroup, ICreateGroup, IUpdateGroup, IDeleteGroup, ISearchGroup } from '@gmahechas/erp-common';
import { Context, axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneGroup = async (data: ICreateGroup): Promise<IGroup> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IGroup }>('/rest/v1/1/group/create/one', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const updateOneGroup = async (data: IUpdateGroup): Promise<IGroup | null> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).put<{ data: IGroup }>('/rest/v1/1/group/update/one', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const deleteOneGroup = async (data: IDeleteGroup): Promise<IGroup | null> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).delete<{ data: IGroup }>('/rest/v1/1/group/delete/one', { data, headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const searchOneGroup = async (data: Partial<ISearchGroup>): Promise<IGroup | null> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IGroup }>('/rest/v1/1/group/search/one', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const searchManyGroup = async (data: Partial<ISearchGroup>[]): Promise<IGroup[]> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IGroup[] }>('/rest/v1/1/group/search/many', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};