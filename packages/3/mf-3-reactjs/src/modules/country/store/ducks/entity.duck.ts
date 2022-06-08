import { Dispatch } from 'redux';
import { ApolloError } from '@apollo/client';
import { ISearchCountry } from '@gmahechas/erp-common-js';

import { graphqlClientV1 } from '@mf-3/helpers/graphql';
import { searchManyCountry } from '@mf-3/modules/country/graphql/queries';
import { entityActionCreators } from '@mf-3/modules/country/store/actions';

export const searchMany = (data: ISearchCountry[]) => async (dispatch: Dispatch, getState: () => void) => {
	try {
		dispatch(entityActionCreators.searchMany(data));
		const { data: response } = await graphqlClientV1.query({ query: searchManyCountry, variables: { data } });
		dispatch(entityActionCreators.searchManySuccess(response.searchManyCountry));
	} catch (error) {
		dispatch(entityActionCreators.searchManyError((error as ApolloError).graphQLErrors));
	}
}
