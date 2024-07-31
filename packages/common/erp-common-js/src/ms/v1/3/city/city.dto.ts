export interface ICreateCity {
  cityName: string;
  cityCode: string;
  estateId: string;
}

export interface IUpdateCity {
  cityId: string;
  cityName: string;
  cityCode: string;
  estateId: string;
}

export interface IDeleteCity {
  cityId: string;
}

export interface ISearchCity {
  cityId: string;
  cityName: string;
  cityCode: string;
  estateId: string;
}