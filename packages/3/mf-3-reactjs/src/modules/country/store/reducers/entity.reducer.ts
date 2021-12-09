import { ICountry } from '@gmahechas/erp-common';
import { EntityTypes, EntityActionTypes } from '../actions/index';

export interface State {
	readonly data: ICountry[];
}

const initialState: State = {
	data: []
}

export const reducer = (state = initialState, action: EntityActionTypes): State => {
	switch (action.type) {
		case EntityTypes.SEARCH_MANY_SUCCESS:
			return {...state, data: action.payload.entities }
		case EntityTypes.SEARCH_MANY_ERROR:
			return { ...state, data: [] }
		default:
			return state;
	}
}