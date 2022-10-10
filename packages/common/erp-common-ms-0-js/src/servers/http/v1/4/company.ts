import { ICompany, ICreateCompany, IUpdateCompany, IDeleteCompany, ISearchCompany } from '@gmahechas/erp-common-js';
import { Context, axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneCompanyV1 = async (data: ICreateCompany): Promise<ICompany> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).post<{ data: ICompany }>(
    '/rest/v1/4/company/create/one',
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

export const updateOneCompanyV1 = async (data: IUpdateCompany): Promise<ICompany | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).put<{ data: ICompany }>(
    '/rest/v1/4/company/update/one',
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

export const deleteOneCompanyV1 = async (data: IDeleteCompany): Promise<ICompany | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).delete<{ data: ICompany }>(
    '/rest/v1/4/company/delete/one',
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

export const searchOneCompanyV1 = async (data: Partial<ISearchCompany>): Promise<ICompany | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).post<{ data: ICompany }>(
    '/rest/v1/4/company/search/one',
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

export const searchManyCompanyV1 = async (data: Partial<ISearchCompany>[]): Promise<ICompany[]> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(env['ms-4']!.app!.endpoint!).post<{ data: ICompany[] }>(
    '/rest/v1/4/company/search/many',
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
