import {
  IUser,
  ICreateUser,
  IUpdateUser,
  IDeleteUser,
  ISearchUser,
} from '@gmahechas/erp-common-js';
import { Context, axiosClient, env } from '@gmahechas/erp-common-ms-utils-js';

export const createOneUserV1 = async (data: ICreateUser): Promise<IUser> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(
    env['ms-1']!.app!.endpoint!,
  ).post<{ data: IUser }>('/rest/v1/1/user/create/one', data, {
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': requestId,
      Authorization: token,
    },
  });
  return response.data;
};

export const updateOneUserV1 = async (
  data: IUpdateUser,
): Promise<IUser | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(
    env['ms-1']!.app!.endpoint!,
  ).put<{ data: IUser }>('/rest/v1/1/user/update/one', data, {
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': requestId,
      Authorization: token,
    },
  });
  return response.data;
};

export const deleteOneUserV1 = async (
  data: IDeleteUser,
): Promise<IUser | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(
    env['ms-1']!.app!.endpoint!,
  ).delete<{ data: IUser }>('/rest/v1/1/user/delete/one', {
    data,
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': requestId,
      Authorization: token,
    },
  });
  return response.data;
};

export const searchOneUserV1 = async (
  data: Partial<ISearchUser>,
): Promise<IUser | null> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(
    env['ms-1']!.app!.endpoint!,
  ).post<{ data: IUser }>('/rest/v1/1/user/search/one', data, {
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': requestId,
      Authorization: token,
    },
  });
  return response.data;
};

export const searchManyUserV1 = async (
  data: Partial<ISearchUser>[],
): Promise<IUser[]> => {
  const token = Context.get('token');
  const requestId = Context.get('requestId');
  const { data: response } = await axiosClient(
    env['ms-1']!.app!.endpoint!,
  ).post<{ data: IUser[] }>('/rest/v1/1/user/search/many', data, {
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': requestId,
      Authorization: token,
    },
  });
  return response.data;
};
