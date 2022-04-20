import { IAuth } from '@gmahechas/erp-common';

export interface IContext {
	token: string | null;
	auth: IAuth | undefined;
}