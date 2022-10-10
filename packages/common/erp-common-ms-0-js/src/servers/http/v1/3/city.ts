import { ICity, ICreateCity, IUpdateCity, IDeleteCity, ISearchCity } from '@gmahechas/erp-common-js';
import { Context, axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneCityV1 = async (data: ICreateCity): Promise<ICity> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICity }>(
    '/rest/v1/3/city/create/one',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Request-Id': requestId,
        Authorization: token,
      },
    },
  );
  return response.data;
};

export const updateOneCityV1 = async (data: IUpdateCity): Promise<ICity | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).put<{ data: ICity }>(
    '/rest/v1/3/city/update/one',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Request-Id': requestId,
        Authorization: token,
      },
    },
  );
  return response.data;
};

export const deleteOneCityV1 = async (data: IDeleteCity): Promise<ICity | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).delete<{ data: ICity }>(
    '/rest/v1/3/city/delete/one',
    {
      data,
      headers: {
        'Content-Type': 'application/json',
        'X-Request-Id': requestId,
        Authorization: token,
      },
    },
  );
  return response.data;
};

export const searchOneCityV1 = async (data: Partial<ISearchCity>): Promise<ICity | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICity }>(
    '/rest/v1/3/city/search/one',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Request-Id': requestId,
        Authorization: token,
      },
    },
  );
  return response.data;
};

export const searchManyCityV1 = async (data: Partial<ISearchCity>[]): Promise<ICity[]> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICity[] }>(
    '/rest/v1/3/city/search/many',
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Request-Id': requestId,
        Authorization: token,
      },
    },
  );
  return response.data;
};
