import { ICity, ICreateCity, IUpdateCity, IDeleteCity, ISearchCity } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneCity = async (data: ICreateCity): Promise<ICity> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICity }>('/rest/v1/3/city/create/one', data);
	return response.data;
};

export const updateOneCity = async (data: IUpdateCity): Promise<ICity | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).put<{ data: ICity }>('/rest/v1/3/city/update/one', data);
	return response.data;
};

export const deleteOneCity = async (data: IDeleteCity): Promise<ICity | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).delete<{ data: ICity }>('/rest/v1/3/city/delete/one', { data });
	return response.data;
};

export const searchOneCity = async (data: Partial<ISearchCity>): Promise<ICity | null> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICity }>('/rest/v1/3/city/search/one', data);
	return response.data;
};

export const searchManyCity = async (data: Partial<ISearchCity>[]): Promise<ICity[]> => {
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICity[] }>('/rest/v1/3/city/search/many', data);
	return response.data;
};