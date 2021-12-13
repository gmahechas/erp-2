import { createStore, combineReducers, applyMiddleware, Store, ReducersMapObject, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

interface IStore extends Store {
	asyncReducers: ReducersMapObject,
	injectReducer: (key: string, asyncReducer: Reducer) => void
}

const storeFactory = (): IStore => {
	const createReducer = (asyncReducers: ReducersMapObject = {}) => combineReducers({ ...asyncReducers });
	const rootReducer = createReducer();
	const composeEnhancers = composeWithDevTools({ name: 'mf-3-reactjs' });
	return ({
		asyncReducers: {},
		injectReducer(key: string, asyncReducer: Reducer) {
			this.asyncReducers[key] = asyncReducer;
			this.replaceReducer(createReducer(this.asyncReducers))
		},
		...createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
	});
}

export const store = storeFactory();

export interface RootState {
};