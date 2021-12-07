export interface State {
	isLogged : boolean;
}

const initialState: State = {
	isLogged: false
}

export const reducer = (state = initialState, action: any): State => {
	switch (action.type) {
		case 'AUTH_CHECK':
		default:
			return state;
	}
}