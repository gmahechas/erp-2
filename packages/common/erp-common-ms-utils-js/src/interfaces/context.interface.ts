import { IAuth } from '@gmahechas/erp-common-js';

export interface IContext {
  token: string;
  auth: IAuth;
  requestId: string;
}
