import { gql } from '@apollo/client';

export const signinAuth = gql`
	query signinAuth($data: SigninAuth) {
    signinAuth(data: $data) {
      id
      userName
      companyKey
    }
  }
`;

export const meAuth = gql`
  query meAuth {
    meAuth {
      id
      userName
      companyKey
    }
  }
`;