// Original file: src/protos/3/address.proto

export interface Update {
  id?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressZipCode?: string;
  addressFullName?: string;
  addressPhone?: string;
  cityId?: string;
}

export interface Update__Output {
  id: string;
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  addressFullName: string;
  addressPhone: string;
  cityId: string;
}
