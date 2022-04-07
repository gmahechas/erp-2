import { IPolicy, ICreatePolicy, IUpdatePolicy, IDeletePolicy, ISearchPolicy } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOnePolicy = async (data: ICreatePolicy, token: string): Promise<IPolicy> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IPolicy }>('/rest/v1/1/policy/create/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const updateOnePolicy = async (data: IUpdatePolicy, token: string): Promise<IPolicy | null> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).put<{ data: IPolicy }>('/rest/v1/1/policy/update/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const deleteOnePolicy = async (data: IDeletePolicy, token: string): Promise<IPolicy | null> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).delete<{ data: IPolicy }>('/rest/v1/1/policy/delete/one', { data, headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchOnePolicy = async (data: Partial<ISearchPolicy>, token: string): Promise<IPolicy | null> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IPolicy }>('/rest/v1/1/policy/search/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchManyPolicy = async (data: Partial<ISearchPolicy>[], token: string): Promise<IPolicy[]> => {
	const { data: response } = await axiosClient(env['ms-1']!.app!.endpoint!).post<{ data: IPolicy[] }>('/rest/v1/1/policy/search/many', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};