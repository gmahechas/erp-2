// Original file: src/protos/4/company.proto

export interface Search {
  id?: string;
  companyName?: string;
  companyIdentification?: string;
  companyKey?: string;
  cityId?: string;
  addressId?: string;
}

export interface Search__Output {
  id: string;
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
  addressId: string;
}
