import { ICity, ICreateCity, IUpdateCity, IDeleteCity, ISearchCity } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneCity = async (data: ICreateCity, token: string): Promise<ICity> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICity }>('/rest/v1/3/city/create/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const updateOneCity = async (data: IUpdateCity, token: string): Promise<ICity | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).put<{ data: ICity }>('/rest/v1/3/city/update/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const deleteOneCity = async (data: IDeleteCity, token: string): Promise<ICity | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).delete<{ data: ICity }>('/rest/v1/3/city/delete/one', { data, headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchOneCity = async (data: Partial<ISearchCity>, token: string): Promise<ICity | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICity }>('/rest/v1/3/city/search/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchManyCity = async (data: Partial<ISearchCity>[], token: string): Promise<ICity[]> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICity[] }>('/rest/v1/3/city/search/many', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};