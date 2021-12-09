import { Dispatch } from 'redux';
import { ApolloClient, NormalizedCacheObject, ApolloError } from '@apollo/client';
import { ISearchCountry } from '@gmahechas/erp-common';

import { entityCreateActionTypes } from '@mf-3/modules/country/store/actions';
import { searchManyQuery } from '@mf-3/modules/country/graphql/queries';

export const searchMany = (search: ISearchCountry[]) => async (dispatch: Dispatch, getState: () => void, { gqlClientV1 }: { gqlClientV1: ApolloClient<NormalizedCacheObject> }) => {
	try {
		dispatch(entityCreateActionTypes.searchMany(search));
		const result = await gqlClientV1.query({ query: searchManyQuery, variables: { data: search } });
		dispatch(entityCreateActionTypes.searchManySuccess(result.data.searchManyCountry));
	} catch (error) {
		dispatch(entityCreateActionTypes.searchManyError(error));
	}
}
