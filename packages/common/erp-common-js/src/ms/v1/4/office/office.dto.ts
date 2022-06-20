export interface ICreateOffice {
  officeName: string;
  companyId: string;
}

export interface IUpdateOffice {
  officeId: string;
  officeName: string;
  companyId: string;
}

export interface IDeleteOffice {
  officeId: string;
}

export interface ISearchOffice {
  officeId: string;
  officeName: string;
  companyId: string;
}