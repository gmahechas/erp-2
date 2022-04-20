import { gql } from '@gmahechas/erp-common-graphqljs';

export const directiveDefs = gql`
	directive @authentication on FIELD_DEFINITION
`;