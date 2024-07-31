import { ICountry } from '@gmahechas/erp-common-js';
import { EntityTypes, EntityActionTypes } from '../actions';

export interface State {
	readonly data: ICountry[];
}

const initialState: State = {
	data: []
}

export const reducer = (state = initialState, action: EntityActionTypes): State => {
	switch (action.type) {
		case EntityTypes.SEARCH_MANY_SUCCESS:
			return { ...state, data: action.payload.data }
		case EntityTypes.SEARCH_MANY_ERROR:
			return { ...state, data: [] }
		default:
			return state;
	}
}