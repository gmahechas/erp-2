import { createStore, combineReducers, applyMiddleware, Store, ReducersMapObject, Reducer, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers as auth } from '@mf-0/auth/store/reducers';

interface IStore extends Store {
	asyncReducers: ReducersMapObject,
	injectReducer: (key: string, asyncReducer: Reducer) => void
}

const storeFactory = (): IStore => {
	const createReducer = (asyncReducers: ReducersMapObject = {}) => combineReducers({ auth, ...asyncReducers });
	const rootReducer = createReducer();
	const composeEnhancers = composeWithDevTools({ name: 'mf-0-reactjs' });
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