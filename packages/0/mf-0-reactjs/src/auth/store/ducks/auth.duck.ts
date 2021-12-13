import { Dispatch } from 'redux';
import { ApolloError } from '@apollo/client';
import { ISigninAuth } from '@gmahechas/erp-common';

import { graphqlClientV1 } from '@mf-0/helpers/graphql';
import { signinAuth } from '@mf-0/auth/graphql/queries';
import { authCreateActionTypes } from '@mf-0/auth/store/actions/auth.actions';

export const signin = (data: ISigninAuth) => async (dispatch: Dispatch, getState: () => void) => {
	try {
		dispatch(authCreateActionTypes.signin(data));
		const { data: response } = await graphqlClientV1.query({ query: signinAuth, variables: { data } });
		dispatch(authCreateActionTypes.signinSuccess(response.signinAuth));
	} catch (error) {
		dispatch(authCreateActionTypes.signinError((error as ApolloError).graphQLErrors));
	}
}