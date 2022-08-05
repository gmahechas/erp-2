import { IEstate, ICreateEstate, IUpdateEstate, IDeleteEstate, ISearchEstate } from '@gmahechas/erp-common-js';
import { Context, axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneEstateV1 = async (data: ICreateEstate): Promise<IEstate> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: IEstate }>('/rest/v1/3/estate/create/one', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const updateOneEstateV1 = async (data: IUpdateEstate): Promise<IEstate | null> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).put<{ data: IEstate }>('/rest/v1/3/estate/update/one', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const deleteOneEstateV1 = async (data: IDeleteEstate): Promise<IEstate | null> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).delete<{ data: IEstate }>('/rest/v1/3/estate/delete/one', { data, headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const searchOneEstateV1 = async (data: Partial<ISearchEstate>): Promise<IEstate | null> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: IEstate }>('/rest/v1/3/estate/search/one', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};

export const searchManyEstateV1 = async (data: Partial<ISearchEstate>[]): Promise<IEstate[]> => {
	const token = Context.get('token');
	const requestId = Context.get('requestId');
	const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: IEstate[] }>('/rest/v1/3/estate/search/many', data, { headers: { 'Content-Type': 'application/json', 'X-Request-Id': requestId, 'Authorization': token } });
	return response.data;
};