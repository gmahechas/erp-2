import { ICountry, ICreateCountry, IUpdateCountry, IDeleteCountry, ISearchCountry } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneCountry = async (token: string, data: ICreateCountry): Promise<ICountry> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICountry }>('/rest/v1/3/country/create/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const updateOneCountry = async (token: string, data: IUpdateCountry): Promise<ICountry | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).put<{ data: ICountry }>('/rest/v1/3/country/update/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const deleteOneCountry = async (token: string, data: IDeleteCountry): Promise<ICountry | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).delete<{ data: ICountry }>('/rest/v1/3/country/delete/one', { data, headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchOneCountry = async (token: string, data: Partial<ISearchCountry>): Promise<ICountry | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICountry }>('/rest/v1/3/country/search/one', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};

export const searchManyCountry = async (token: string, data: Partial<ISearchCountry>[]): Promise<ICountry[]> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICountry[] }>('/rest/v1/3/country/search/many', data, { headers: { 'Content-Type': 'application/json', 'Authorization': token } });
	return response.data;
};