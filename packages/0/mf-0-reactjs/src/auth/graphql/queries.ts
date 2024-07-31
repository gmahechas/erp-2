import { gql } from '@apollo/client';

export const signinAuth = gql`
	query signinAuthV1($data: SigninAuth) {
    signinAuth(data: $data) {
      userId
      userName
      companyKey
    }
  }
`;

export const signoutAuth = gql`
  query signoutAuthV1 {
    signoutAuth {
      userId
      userName
      companyKey
    }
  }
`;

export const meAuth = gql`
  query meAuthV1 {
    meAuth {
      userId
      userName
      companyKey
    }
  }
`;