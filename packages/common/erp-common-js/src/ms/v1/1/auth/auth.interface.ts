export interface IAuth {
  id: string;
  userName: string;
  companyId: string;
  companyKey: string;
  scope: string;
  iat: number;
  exp: number;
}