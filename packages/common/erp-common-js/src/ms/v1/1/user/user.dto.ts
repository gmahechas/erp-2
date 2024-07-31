export interface ICreateUser {
  userName: string;
  userPassword: string;
  groups: string[];
  policies: string[];
}

export interface IUpdateUser {
  userId: string;
  userName: string;
  userPassword: string;
  groups: string[];
  policies: string[];
}

export interface IDeleteUser {
  userId: string;
}

export interface ISearchUser {
  userId: string;
  userName: string;
}