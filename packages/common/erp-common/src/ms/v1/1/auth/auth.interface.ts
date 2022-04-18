export interface IAuth {
  id: string;
  userName: string;
  companyId: string;
  companyKey: string;
  scope: { [key: string]: string[] };
  iat: number;
  exp: number;
}