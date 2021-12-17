export interface ICreateUser {
  userName: string;
  userPassword: string;
  companyId: string;
  companyKey: string;
}

export interface IUpdateUser {
  id: string;
  userName: string;
  userPassword: string;
  companyId: string;
  companyKey: string;
}

export interface IDeleteUser {
  id: string;
  companyId: string;
  companyKey: string;
}

export interface ISearchUser {
  id: string;
  userName: string;
  companyId: string;
  companyKey: string;
}