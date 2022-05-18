import { ICompany, ICreateCompany, IUpdateCompany, IDeleteCompany, ISearchCompany } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneCompany = async (data: ICreateCompany, token: string): Promise<ICompany> => {
	const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).post<{ data: ICompany }>('/rest/v1/4/company/create/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const updateOneCompany = async (data: IUpdateCompany, token: string): Promise<ICompany | null> => {
	const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).put<{ data: ICompany }>('/rest/v1/4/company/update/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const deleteOneCompany = async (data: IDeleteCompany, token: string): Promise<ICompany | null> => {
	const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).delete<{ data: ICompany }>('/rest/v1/4/company/delete/one', { data, headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchOneCompany = async (data: Partial<ISearchCompany>, token: string): Promise<ICompany | null> => {
	const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).post<{ data: ICompany }>('/rest/v1/4/company/search/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchManyCompany = async (data: Partial<ISearchCompany>[], token: string): Promise<ICompany[]> => {
	const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).post<{ data: ICompany[] }>('/rest/v1/4/company/search/many', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};