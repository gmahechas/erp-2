export interface ICreateAddress {
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}

export interface IUpdateAddress {
  id: string;
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}

export interface IDeleteAddress {
  id: string;
}

export interface ISearchAddress {
  id: string;
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}