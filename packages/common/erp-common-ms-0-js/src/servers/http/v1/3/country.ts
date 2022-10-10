import { ICountry, ICreateCountry, IUpdateCountry, IDeleteCountry, ISearchCountry } from '@gmahechas/erp-common-js';
import { Context, axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneCountryV1 = async (data: ICreateCountry): Promise<ICountry> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICountry }>(
    '/rest/v1/3/country/create/one',
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

export const updateOneCountryV1 = async (data: IUpdateCountry): Promise<ICountry | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).put<{ data: ICountry }>(
    '/rest/v1/3/country/update/one',
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

export const deleteOneCountryV1 = async (data: IDeleteCountry): Promise<ICountry | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).delete<{ data: ICountry }>(
    '/rest/v1/3/country/delete/one',
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

export const searchOneCountryV1 = async (data: Partial<ISearchCountry>): Promise<ICountry | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICountry }>(
    '/rest/v1/3/country/search/one',
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

export const searchManyCountryV1 = async (data: Partial<ISearchCountry>[]): Promise<ICountry[]> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-3']!.app!.endpoint!).post<{ data: ICountry[] }>(
    '/rest/v1/3/country/search/many',
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
