import { IEstate, ICreateEstate, IUpdateEstate, IDeleteEstate, ISearchEstate } from '@gmahechas/erp-common';
import { Context, axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneEstate = async (data: ICreateEstate): Promise<IEstate> => {
	const token = Context.get('token');
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: IEstate }>('/rest/v1/3/estate/create/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const updateOneEstate = async (data: IUpdateEstate): Promise<IEstate | null> => {
	const token = Context.get('token');
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).put<{ data: IEstate }>('/rest/v1/3/estate/update/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const deleteOneEstate = async (data: IDeleteEstate): Promise<IEstate | null> => {
	const token = Context.get('token');
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).delete<{ data: IEstate }>('/rest/v1/3/estate/delete/one', { data, headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchOneEstate = async (data: Partial<ISearchEstate>): Promise<IEstate | null> => {
	const token = Context.get('token');
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: IEstate }>('/rest/v1/3/estate/search/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchManyEstate = async (data: Partial<ISearchEstate>[]): Promise<IEstate[]> => {
	const token = Context.get('token');
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: IEstate[] }>('/rest/v1/3/estate/search/many', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};