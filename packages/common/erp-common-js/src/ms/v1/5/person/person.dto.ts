export interface ICreatePerson {
  personIdentification: string;
  personFirstName: string;
  personSecondName: string;
  personFirstSurname: string;
  personSecondSurname: string;
  personCompanyName: string;
  companyId: string;
  typePersonId: string;
  typeIdentificationId: string;
}

export interface IUpdatePerson {
  personId: string;
  personIdentification: string;
  personFirstName: string;
  personSecondName: string;
  personFirstSurname: string;
  personSecondSurname: string;
  personCompanyName: string;
  typePersonId: string;
  typeIdentificationId: string;
}

export interface IDeletePerson {
  personId: string;
}

export interface ISearchPerson {
  personId: string;
  personIdentification: string;
  personFirstName: string;
  personSecondName: string;
  personFirstSurname: string;
  personSecondSurname: string;
  personCompanyName: string;
  companyId: string;
  typePersonId: string;
  typeIdentificationId: string;
}