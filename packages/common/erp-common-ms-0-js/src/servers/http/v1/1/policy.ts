import {
  IPolicy,
  ICreatePolicy,
  IUpdatePolicy,
  IDeletePolicy,
  ISearchPolicy,
} from '@gmahechas/erp-common-js';
import { Context, axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOnePolicyV1 = async (
  data: ICreatePolicy,
): Promise<IPolicy> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(
    env['ms-1']!.app!.endpoint!,
  ).post<{ data: IPolicy }>('/rest/v1/1/policy/create/one', data, {
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': requestId,
      Authorization: token,
    },
  });
  return response.data;
};

export const updateOnePolicyV1 = async (
  data: IUpdatePolicy,
): Promise<IPolicy | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(
    env['ms-1']!.app!.endpoint!,
  ).put<{ data: IPolicy }>('/rest/v1/1/policy/update/one', data, {
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': requestId,
      Authorization: token,
    },
  });
  return response.data;
};

export const deleteOnePolicyV1 = async (
  data: IDeletePolicy,
): Promise<IPolicy | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(
    env['ms-1']!.app!.endpoint!,
  ).delete<{ data: IPolicy }>('/rest/v1/1/policy/delete/one', {
    data,
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': requestId,
      Authorization: token,
    },
  });
  return response.data;
};

export const searchOnePolicyV1 = async (
  data: Partial<ISearchPolicy>,
): Promise<IPolicy | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(
    env['ms-1']!.app!.endpoint!,
  ).post<{ data: IPolicy }>('/rest/v1/1/policy/search/one', data, {
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': requestId,
      Authorization: token,
    },
  });
  return response.data;
};

export const searchManyPolicyV1 = async (
  data: Partial<ISearchPolicy>[],
): Promise<IPolicy[]> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(
    env['ms-1']!.app!.endpoint!,
  ).post<{ data: IPolicy[] }>('/rest/v1/1/policy/search/many', data, {
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': requestId,
      Authorization: token,
    },
  });
  return response.data;
};
