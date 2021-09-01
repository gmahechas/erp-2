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
  id: string;
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
  id: string;
}

export interface ISearchPerson {
  id: string;
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