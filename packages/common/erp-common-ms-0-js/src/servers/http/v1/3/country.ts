import { ICountry, ICreateCountry, IUpdateCountry, IDeleteCountry, ISearchCountry } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneCountry = async (data: ICreateCountry, token: string): Promise<ICountry> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICountry }>('/rest/v1/3/country/create/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const updateOneCountry = async (data: IUpdateCountry, token: string): Promise<ICountry | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).put<{ data: ICountry }>('/rest/v1/3/country/update/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const deleteOneCountry = async (data: IDeleteCountry, token: string): Promise<ICountry | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).delete<{ data: ICountry }>('/rest/v1/3/country/delete/one', { data, headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchOneCountry = async (data: Partial<ISearchCountry>, token: string): Promise<ICountry | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICountry }>('/rest/v1/3/country/search/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchManyCountry = async (data: Partial<ISearchCountry>[], token: string): Promise<ICountry[]> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICountry[] }>('/rest/v1/3/country/search/many', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};