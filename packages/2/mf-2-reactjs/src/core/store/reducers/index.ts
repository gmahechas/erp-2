import { combineReducers } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '@mf-2/core/store';
import { reducer as layout, State as LayoutState } from './layout.reducer';

export interface State {
	layout: LayoutState;
}

export const reducers = combineReducers<State>({ layout });
export const connector = connect((state: RootState) => ({ layout: state.core.layout }));
export type PropsFromRedux = ConnectedProps<typeof connector>;