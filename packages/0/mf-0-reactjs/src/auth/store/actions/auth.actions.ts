import { ISigninAuth, IAuth } from '@gmahechas/erp-common-js';

export enum AuthTypes {
	SIGNIN = '[Auth] Signin',
	SIGNIN_SUCCESS = '[Auth] Signin Success',
	SIGNIN_ERROR = '[Auth] Signin Error',
	SIGNOUT = '[Auth] Signout',
	SIGNOUT_SUCCESS = '[Auth] Signout Success',
	SIGNOUT_ERROR = '[Auth] Signout Error',
	ME = '[Auth] Me',
	ME_SUCCESS = '[Auth] Me Success',
	ME_ERROR = '[Auth] Me Error',
};

type ISignin = { type: typeof AuthTypes.SIGNIN, payload: { data: ISigninAuth } };
type ISigninSuccess = { type: typeof AuthTypes.SIGNIN_SUCCESS, payload: { data: IAuth } };
type ISigninError = { type: typeof AuthTypes.SIGNIN_ERROR, payload: { error: any } };
type ISignout = { type: typeof AuthTypes.SIGNOUT };
type ISignoutSuccess = { type: typeof AuthTypes.SIGNOUT_SUCCESS };
type ISignoutError = { type: typeof AuthTypes.SIGNOUT_ERROR, payload: { error: any } };
type IMe = { type: typeof AuthTypes.ME };
type IMeSuccess = { type: typeof AuthTypes.ME_SUCCESS, payload: { data: IAuth } };
type IMeError = { type: typeof AuthTypes.ME_ERROR, payload: { error: any } };
export type AuthActionTypes = ISignin | ISigninSuccess | ISigninError | ISignout | ISignoutSuccess | ISignoutError | IMe | IMeSuccess | IMeError;

export const authActionCreators = {
	signin: (data: ISigninAuth): ISignin => ({ type: AuthTypes.SIGNIN, payload: { data } }),
	signinSuccess: (data: IAuth): ISigninSuccess => ({ type: AuthTypes.SIGNIN_SUCCESS, payload: { data } }),
	signinError: (error: any): ISigninError => ({ type: AuthTypes.SIGNIN_ERROR, payload: { error } }),
	signout: (): ISignout => ({ type: AuthTypes.SIGNOUT }),
	signoutSuccess: (): ISignoutSuccess => ({ type: AuthTypes.SIGNOUT_SUCCESS }),
	signoutError: (error: any): ISignoutError => ({ type: AuthTypes.SIGNOUT_ERROR, payload: { error } }),
	me: (): IMe => ({ type: AuthTypes.ME }),
	meSuccess: (data: IAuth): IMeSuccess => ({ type: AuthTypes.ME_SUCCESS, payload: { data } }),
	meError: (error: any): IMeError => ({ type: AuthTypes.ME_ERROR, payload: { error } }),
}