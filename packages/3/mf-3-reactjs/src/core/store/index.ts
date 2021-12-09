import { createStore, combineReducers, applyMiddleware, Store, ReducersMapObject, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { State as CountryState } from '@mf-3/modules/country/store/reducers';

interface IStore extends Store {
	asyncReducers: ReducersMapObject,
	injectReducer: (key: string, asyncReducer: Reducer) => void
}

const gqlClientV1 = new ApolloClient({
	uri: 'http://localhost:50000/graphql/v1',
	cache: new InMemoryCache({
		addTypename: false,
	})
});

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
		...createStore(rootReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument({ gqlClientV1 }))))
	});
}

export const store = storeFactory();

export interface RootState {
	country: CountryState
};