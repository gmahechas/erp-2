export interface ICreateEstate {
  estateName: string;
  estateCode: string;
  countryId: string;
}

export interface IUpdateEstate {
  estateId: string;
  estateName: string;
  estateCode: string;
  countryId: string;
}

export interface IDeleteEstate {
  estateId: string;
}

export interface ISearchEstate {
  estateId: string;
  estateName: string;
  estateCode: string;
  countryId: string;
}