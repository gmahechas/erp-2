// Original file: src/protos/5/person.proto

export interface Search {
  id?: string;
  personIdentification?: string;
  personFirstName?: string;
  personSecondName?: string;
  personFirstSurname?: string;
  personSecondSurname?: string;
  personCompanyName?: string;
  companyId?: string;
  typePersonId?: string;
  typeIdentificationId?: string;
}

export interface Search__Output {
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
