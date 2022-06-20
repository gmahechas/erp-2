import { gql } from '@apollo/client';

export const signinAuth = gql`
	query signinAuth($data: SigninAuth) {
    signinAuth(data: $data) {
      userId
      userName
      companyKey
    }
  }
`;

export const signoutAuth = gql`
  query signoutAuth {
    signoutAuth {
      userId
      userName
      companyKey
    }
  }
`;

export const meAuth = gql`
  query meAuth {
    meAuth {
      userId
      userName
      companyKey
    }
  }
`;