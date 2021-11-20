export interface ICreateEstate {
  estateName: string;
  estateCode: string;
  countryId: string;
}

export interface IUpdateEstate {
  id: string;
  estateName: string;
  estateCode: string;
  countryId: string;
}

export interface IDeleteEstate {
  id: string;
}

export interface ISearchEstate {
  id: string;
  estateName: string;
  estateCode: string;
  countryId: string;
}