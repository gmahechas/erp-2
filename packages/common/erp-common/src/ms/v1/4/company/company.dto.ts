export interface ICreateCompany {
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
}

export interface IUpdateCompany {
  id: string;
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
}

export interface IDeleteCompany {
  id: string;
}

export interface ISearchCompany {
  id: string;
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
}