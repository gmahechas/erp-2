import { ISigninAuth, IAuth } from '@gmahechas/erp-common';

export enum AuthTypes {
	SIGNIN = '[Auth] Signin',
	SIGNIN_SUCCESS = '[Auth] Signin Success',
	SIGNIN_ERROR = '[Auth] Signin Error',
};

type ISignin = { type: typeof AuthTypes.SIGNIN, payload: { data: ISigninAuth } };
type ISigninSuccess = { type: typeof AuthTypes.SIGNIN_SUCCESS, payload: { data: IAuth } };
type ISigninError = { type: typeof AuthTypes.SIGNIN_ERROR, payload: { error: any } };
export type AuthActionTypes = ISignin | ISigninSuccess | ISigninError;

export const authCreateActionTypes = {
	signin: (data: ISigninAuth): ISignin => ({ type: AuthTypes.SIGNIN, payload: { data } }),
	signinSuccess: (data: IAuth): ISigninSuccess => ({ type: AuthTypes.SIGNIN_SUCCESS, payload: { data } }),
	signinError: (error: any): ISigninError => ({ type: AuthTypes.SIGNIN_ERROR, payload: { error } })
}