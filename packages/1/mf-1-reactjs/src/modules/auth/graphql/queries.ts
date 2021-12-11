import { gql } from '@apollo/client';

export const signinAuth = gql`
	query signinAuth($data: SigninAuth) {
    signinAuth(data: $data) {
      id
      userName
      companyKey
      iat
    }
  }
`;