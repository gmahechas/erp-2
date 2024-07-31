export interface ICreateAddress {
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}

export interface IUpdateAddress {
  addressId: string;
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}

export interface IDeleteAddress {
  addressId: string;
}

export interface ISearchAddress {
  addressId: string;
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}