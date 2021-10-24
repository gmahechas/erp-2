import { IEstate, ICreateEstate, IUpdateEstate, IDeleteEstate, ISearchEstate } from '@gmahechas/erp-common';
import { axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneEstate = async (data: ICreateEstate): Promise<IEstate> => {
	const { data: response } = await axiosClient(env.ms!.three!.command!.url!).post<{ data: IEstate }>('/rest/v1/3/estate/create/one', data);
	return response.data;
};

export const updateOneEstate = async (data: IUpdateEstate): Promise<IEstate> => {
	const { data: response } = await axiosClient(env.ms!.three!.command!.url!).put<{ data: IEstate }>('/rest/v1/3/estate/update/one', data);
	return response.data;
};

export const deleteOneEstate = async (data: IDeleteEstate): Promise<IEstate> => {
	const { data: response } = await axiosClient(env.ms!.three!.command!.url!).delete<{ data: IEstate }>('/rest/v1/3/estate/delete/one', { data });
	return response.data;
};

export const searchOneEstate = async (data: Partial<ISearchEstate>): Promise<IEstate> => {
	const { data: response } = await axiosClient(env.ms!.three!.command!.url!).post<{ data: IEstate }>('/rest/v1/3/estate/search/one', data);
	return response.data;
};

export const searchManyEstate = async (data: Partial<ISearchEstate>[]): Promise<IEstate[]> => {
	const { data: response } = await axiosClient(env.ms!.three!.command!.url!).post<{ data: IEstate[] }>('/rest/v1/3/estate/search/many', data);
	return response.data;
};