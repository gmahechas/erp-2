import { IGroup, ICreateGroup, IUpdateGroup, IDeleteGroup, ISearchGroup } from '@gmahechas/erp-common-js';
import { Context, sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';
import { Group } from './group.mongo';

export const createOneGroup = async (data: ICreateGroup): Promise<IGroup> => {
  const { companyId } = Context.get('auth');
  const newData = Object.assign({}, data, { companyId });
  let result = await Group.create(newData);
  return result;
};

export const updateOneGroup = async (data: IUpdateGroup): Promise<IGroup | null> => {
  const { companyId } = Context.get('auth');
  const { groupId } = data;
  let entity = await Group.findOne({ groupId });
  if (!entity) {
    sendError(TypeErrorMessage.NOT_FOUND);
  }
  if (entity.companyId !== companyId) {
    sendError(TypeErrorMessage.AUTHORIZATION);
  }
  entity.set(data);
  return await entity.save();
};

export const deleteOneGroup = async (data: IDeleteGroup): Promise<IGroup | null> => {
  const { companyId } = Context.get('auth');
  const { groupId } = data;
  let entity = await Group.findOne({ groupId });
  if (!entity) {
    sendError(TypeErrorMessage.NOT_FOUND);
  }
  if (entity.companyId !== companyId) {
    sendError(TypeErrorMessage.AUTHORIZATION);
  }
  return await entity.remove();
};

export const searchOneGroup = async (data: Partial<ISearchGroup>): Promise<IGroup | null> => {
  const { companyId } = Context.get('auth');
  const newData = Object.assign({}, data, { companyId });
  const result = await Group.findOne(newData);
  return result;
};

export const searchManyGroup = async (data: Partial<ISearchGroup>[]): Promise<IGroup[]> => {
  const { companyId } = Context.get('auth');
  const newData = data.length === 0 ? [{ companyId }] : data.map((item) => Object.assign({}, item, { companyId }));
  const search = newData.length === 0 ? [{}] : newData;
  const result = await Group.find({ $or: search });
  return result;
};
