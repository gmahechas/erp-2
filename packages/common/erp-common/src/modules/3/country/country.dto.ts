export interface ICreateCountry {
  countryName: string;
  countryCode: string;
}

export interface IUpdateCountry {
  id: string;
  countryName: string;
  countryCode: string;
}

export interface IDeleteCountry {
  id: string;
}

export interface ISearchCountry {
  id: string;
  countryName: string;
  countryCode: string;
}