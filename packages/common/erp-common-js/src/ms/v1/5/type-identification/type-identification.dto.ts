export interface ICreateTypeIdentification {
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}

export interface IUpdateTypeIdentification {
  typeIdentificationId: string;
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}

export interface IDeleteTypeIdentification {
  typeIdentificationId: string;
}

export interface ISearchTypeIdentification {
  typeIdentificationId: string;
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}