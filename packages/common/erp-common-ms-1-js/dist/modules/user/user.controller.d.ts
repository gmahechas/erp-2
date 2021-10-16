import { ICreateUser, ISearchUser, IUser } from '@gmahechas/erp-common';
export declare const createOneUser: (data: ICreateUser) => Promise<IUser>;
export declare const searchOneUser: (data: Partial<ISearchUser>) => Promise<IUser | null>;
