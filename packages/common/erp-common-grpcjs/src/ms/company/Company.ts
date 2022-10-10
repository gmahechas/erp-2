// Original file: src/protos/4/company.proto

export interface Company {
  id?: string;
  companyName?: string;
  companyIdentification?: string;
  companyKey?: string;
  cityId?: string;
  addressId?: string;
}

export interface Company__Output {
  id: string;
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
  addressId: string;
}
