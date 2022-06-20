export interface ICreateCompany {
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
}

export interface IUpdateCompany {
  companyId: string;
  companyName: string;
  companyIdentification: string;
  cityId: string;
}

export interface IDeleteCompany {
  companyId: string;
}

export interface ISearchCompany {
  companyId: string;
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
}