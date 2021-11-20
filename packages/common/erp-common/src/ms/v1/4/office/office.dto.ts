export interface ICreateOffice {
  officeName: string;
  companyId: string;
}

export interface IUpdateOffice {
  id: string;
  officeName: string;
  companyId: string;
}

export interface IDeleteOffice {
  id: string;
}

export interface ISearchOffice {
  id: string;
  officeName: string;
  companyId: string;
}