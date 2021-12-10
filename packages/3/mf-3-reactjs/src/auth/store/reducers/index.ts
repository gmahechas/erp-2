import { combineReducers } from 'redux';

import { reducer as auth, State as AuthState } from './auth.reducer';

export interface State {
	auth: AuthState;
}
export const reducers = combineReducers<State>({ auth });