import { combineReducers } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '@mf-3/core/store';
import * as fromDucks from '@mf-3/modules/country/store/ducks';
import { reducer as entity, State as EntityState } from './entity.reducer';
import { reducer as pagination, State as PaginationState } from './pagination.reducer'

export interface State {
	entity: EntityState;
	pagination: PaginationState;
}

export const reducers = combineReducers<State>({ entity, pagination });
export const connector = connect((state: RootState) => ({ country: state.country }), fromDucks);
export type PropsFromRedux = ConnectedProps<typeof connector>;