import { ICompany, ICreateCompany, IUpdateCompany, IDeleteCompany, ISearchCompany } from '@gmahechas/erp-common';
import { Context, axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneCompany = async (data: ICreateCompany): Promise<ICompany> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).post<{ data: ICompany }>('/rest/v1/4/company/create/one', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const updateOneCompany = async (data: IUpdateCompany): Promise<ICompany | null> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).put<{ data: ICompany }>('/rest/v1/4/company/update/one', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const deleteOneCompany = async (data: IDeleteCompany): Promise<ICompany | null> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).delete<{ data: ICompany }>('/rest/v1/4/company/delete/one', { data, headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const searchOneCompany = async (data: Partial<ISearchCompany>): Promise<ICompany | null> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).post<{ data: ICompany }>('/rest/v1/4/company/search/one', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const searchManyCompany = async (data: Partial<ISearchCompany>[]): Promise<ICompany[]> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).post<{ data: ICompany[] }>('/rest/v1/4/company/search/many', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};