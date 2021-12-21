import { ISigninAuth, IAuth } from '@gmahechas/erp-common';

export enum AuthTypes {
	SIGNIN = '[Auth] Signin',
	SIGNIN_SUCCESS = '[Auth] Signin Success',
	SIGNIN_ERROR = '[Auth] Signin Error',
	ME = '[Auth] Me',
	ME_SUCCESS = '[Auth] Me Success',
	ME_ERROR = '[Auth] Me Error',
};

type ISignin = { type: typeof AuthTypes.SIGNIN, payload: { data: ISigninAuth } };
type ISigninSuccess = { type: typeof AuthTypes.SIGNIN_SUCCESS, payload: { data: IAuth } };
type ISigninError = { type: typeof AuthTypes.SIGNIN_ERROR, payload: { error: any } };
type IMe = { type: typeof AuthTypes.ME };
type IMeSuccess = { type: typeof AuthTypes.ME_SUCCESS, payload: { data: IAuth } };
type IMeError = { type: typeof AuthTypes.ME_ERROR, payload: { error: any } };
export type AuthActionTypes = ISignin | ISigninSuccess | ISigninError | IMe | IMeSuccess | IMeError;

export const authCreateActionTypes = {
	signin: (data: ISigninAuth): ISignin => ({ type: AuthTypes.SIGNIN, payload: { data } }),
	signinSuccess: (data: IAuth): ISigninSuccess => ({ type: AuthTypes.SIGNIN_SUCCESS, payload: { data } }),
	signinError: (error: any): ISigninError => ({ type: AuthTypes.SIGNIN_ERROR, payload: { error } }),
	me: (): IMe => ({ type: AuthTypes.ME }),
	meSuccess: (data: IAuth): IMeSuccess => ({ type: AuthTypes.ME_SUCCESS, payload: { data } }),
	meError: (error: any): IMeError => ({ type: AuthTypes.ME_ERROR, payload: { error } }),
}