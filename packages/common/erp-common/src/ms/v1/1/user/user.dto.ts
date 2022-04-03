export interface ICreateUser {
  userName: string;
  userPassword: string;
}

export interface IUpdateUser {
  id: string;
  userName: string;
  userPassword: string;
}

export interface IDeleteUser {
  id: string;
}

export interface ISearchUser {
  id: string;
  userName: string;
}