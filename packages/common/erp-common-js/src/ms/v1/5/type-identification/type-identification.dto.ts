export interface ICreateTypeIdentification {
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}

export interface IUpdateTypeIdentification {
  id: string;
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}

export interface IDeleteTypeIdentification {
  id: string;
}

export interface ISearchTypeIdentification {
  id: string;
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}