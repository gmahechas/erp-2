import { ICountry, ICreateCountry, IUpdateCountry, IDeleteCountry, ISearchCountry } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneCountry = async (data: ICreateCountry): Promise<ICountry> => {
	const { data: response } = await axiosClient(env.ms!.three!.command!.url!).post<{ data: ICountry }>('/rest/v1/3/country/create/one', data);
	return response.data;
};

export const updateOneCountry = async (data: IUpdateCountry): Promise<ICountry | null> => {
	const { data: response } = await axiosClient(env.ms!.three!.command!.url!).put<{ data: ICountry }>('/rest/v1/3/country/update/one', data);
	return response.data;
};

export const deleteOneCountry = async (data: IDeleteCountry): Promise<ICountry | null> => {
	const { data: response } = await axiosClient(env.ms!.three!.command!.url!).delete<{ data: ICountry }>('/rest/v1/3/country/delete/one', { data });
	return response.data;
};

export const searchOneCountry = async (data: Partial<ISearchCountry>): Promise<ICountry | null> => {
	const { data: response } = await axiosClient(env.ms!.three!.command!.url!).post<{ data: ICountry }>('/rest/v1/3/country/search/one', data);
	return response.data;
};

export const searchManyCountry = async (data: Partial<ISearchCountry>[]): Promise<ICountry[]> => {
	const { data: response } = await axiosClient(env.ms!.three!.command!.url!).post<{ data: ICountry[] }>('/rest/v1/3/country/search/many', data);
	return response.data;
};