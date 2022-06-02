import { IAuth } from '@gmahechas/erp-common';

export interface IContext {
	token: string;
	auth: IAuth;
	requestId: string;
}