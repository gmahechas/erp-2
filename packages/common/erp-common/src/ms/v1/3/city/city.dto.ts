export interface ICreateCity {
  cityName: string;
  cityCode: string;
  estateId: string;
}

export interface IUpdateCity {
  id: string;
  cityName: string;
  cityCode: string;
  estateId: string;
}

export interface IDeleteCity {
  id: string;
}

export interface ISearchCity {
  id: string;
  cityName: string;
  cityCode: string;
  estateId: string;
}