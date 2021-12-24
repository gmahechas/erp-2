import { LayoutTypes, LayoutActionTypes } from '../actions';

export interface State {
	readonly loading: boolean;
}

const initialState: State = {
	loading: false
}

export const reducer = (state = initialState, action: LayoutActionTypes): State => {
	switch (action.type) {
		case LayoutTypes.LOADING:
			return { ...state, loading: true }
		case LayoutTypes.LOADED:
			return { ...state, loading: false }
		default:
			return state;
	}
}