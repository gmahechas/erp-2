import { IAuth } from '@gmahechas/erp-common';
import { AuthTypes, AuthActionTypes } from '../actions';

export interface State {
	info: IAuth | null;
	isLogged : boolean;
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
			return { ...state };
		case AuthTypes.SIGNIN_ERROR:
			return { ...state };
		default:
			return state;
	}
}