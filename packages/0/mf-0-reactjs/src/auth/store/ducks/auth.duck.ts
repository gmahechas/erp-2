import { Dispatch } from 'redux';
import { ApolloError } from '@apollo/client';
import { ISigninAuth } from '@gmahechas/erp-common-js';

import { graphqlClientV1 } from '@mf-0/helpers/graphql';
import { signinAuth, signoutAuth, meAuth } from '@mf-0/auth/graphql/queries';
import { authActionCreators } from '@mf-0/auth/store/actions/auth.actions';

export const signin = (data: ISigninAuth) => async (dispatch: Dispatch, getState: () => void) => {
	try {
		dispatch(authActionCreators.signin(data));
		const { data: response } = await graphqlClientV1.query({ query: signinAuth, variables: { data } });
		dispatch(authActionCreators.signinSuccess(response.signinAuth));
	} catch (error) {
		dispatch(authActionCreators.signinError((error as ApolloError).graphQLErrors));
	}
}

export const signout = () => async (dispatch: Dispatch, getState: () => void) => {
	try {
		dispatch(authActionCreators.signout());
		const { data: response } = await graphqlClientV1.query({ query: signoutAuth });
		dispatch(authActionCreators.signoutSuccess());
	} catch (error) {
		dispatch(authActionCreators.signinError((error as ApolloError).graphQLErrors));
	}
}

export const me = () => async (dispatch: Dispatch, getState: () => void) => {
	try {
		dispatch(authActionCreators.me());
		const { data: response } = await graphqlClientV1.query({ query: meAuth });
		dispatch(authActionCreators.meSuccess(response.meAuth));
	} catch (error) {
		dispatch(authActionCreators.signinError((error as ApolloError).graphQLErrors));
	}
}