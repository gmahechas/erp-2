import { gql } from '@gmahechas/erp-common-graphqljs';

export const directiveDefs = gql`
  directive @logger on FIELD_DEFINITION
  directive @authorization(scopes: [String]) on FIELD_DEFINITION
  directive @authentication on FIELD_DEFINITION
`;
