import { IEstate, ICreateEstate, IUpdateEstate, IDeleteEstate, ISearchEstate } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneEstate = async (data: ICreateEstate, token: string): Promise<IEstate> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: IEstate }>('/rest/v1/3/estate/create/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const updateOneEstate = async (data: IUpdateEstate, token: string): Promise<IEstate | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).put<{ data: IEstate }>('/rest/v1/3/estate/update/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const deleteOneEstate = async (data: IDeleteEstate, token: string): Promise<IEstate | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).delete<{ data: IEstate }>('/rest/v1/3/estate/delete/one', { data, headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchOneEstate = async (data: Partial<ISearchEstate>, token: string): Promise<IEstate | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: IEstate }>('/rest/v1/3/estate/search/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchManyEstate = async (data: Partial<ISearchEstate>[], token: string): Promise<IEstate[]> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: IEstate[] }>('/rest/v1/3/estate/search/many', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};