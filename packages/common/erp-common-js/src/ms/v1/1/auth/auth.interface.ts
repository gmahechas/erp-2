export interface IAuth {
  userId: string;
  userName: string;
  companyId: string;
  companyKey: string;
  scope: string;
  iat: number;
  exp: number;
}