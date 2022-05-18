export interface ICreateUser {
  userName: string;
  userPassword: string;
  groups: string[];
  policies: string[];
}

export interface IUpdateUser {
  id: string;
  userName: string;
  userPassword: string;
  groups: string[];
  policies: string[];
}

export interface IDeleteUser {
  id: string;
}

export interface ISearchUser {
  id: string;
  userName: string;
}