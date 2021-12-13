import { combineReducers } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '@mf-0/core/store';
import * as fromDucks from '@mf-0/auth/store/ducks';
import { reducer as auth, State as AuthState } from './auth.reducer';

export interface State {
	auth: AuthState;
}
export const reducers = combineReducers<State>({ auth });
export const connector = connect((state: RootState) => ({ auth: state.auth }), fromDucks);
export type PropsFromRedux = ConnectedProps<typeof connector>;