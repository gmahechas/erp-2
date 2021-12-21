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

export const signoutAuth = gql`
  query signoutAuth {
    signoutAuth {
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