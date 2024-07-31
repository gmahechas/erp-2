export interface ICreateCountry {
  countryName: string;
  countryCode: string;
}

export interface IUpdateCountry {
  countryId: string;
  countryName: string;
  countryCode: string;
}

export interface IDeleteCountry {
  countryId: string;
}

export interface ISearchCountry {
  countryId: string;
  countryName: string;
  countryCode: string;
}