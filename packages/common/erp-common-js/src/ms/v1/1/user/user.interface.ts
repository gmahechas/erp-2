export interface IUser {
  userId: string;
  userName: string;
  userPassword: string;
  groups: string[];
  policies: string[];
  companyId: string;
  companyKey: string;
}