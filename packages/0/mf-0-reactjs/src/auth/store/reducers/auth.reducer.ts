import { IAuth } from '@gmahechas/erp-common-js';
import { AuthTypes, AuthActionTypes } from '../actions';

export interface State {
	info: IAuth | null;
	isLogged: boolean;
}

const initialState: State = {
	info: null,
	isLogged: false
}

export const reducer = (state = initialState, action: AuthActionTypes): State => {
	switch (action.type) {
		case AuthTypes.SIGNIN:
			return { ...state };
		case AuthTypes.SIGNIN_SUCCESS:
			return { ...state, info: action.payload.data, isLogged: true };
		case AuthTypes.SIGNIN_ERROR:
			return { ...state, ...initialState };
		case AuthTypes.SIGNOUT:
			return { ...state };
		case AuthTypes.SIGNOUT_SUCCESS:
			return { ...state, ...initialState };
		case AuthTypes.SIGNOUT_ERROR:
			return { ...state };
		case AuthTypes.ME:
			return state;
		case AuthTypes.ME_SUCCESS:
			return { ...state, info: action.payload.data, isLogged: true };
		case AuthTypes.ME_ERROR:
			return { ...state, ...initialState };
		default:
			return state;
	}
}