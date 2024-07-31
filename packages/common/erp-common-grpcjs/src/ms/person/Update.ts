// Original file: src/protos/5/person.proto

export interface Update {
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

export interface Update__Output {
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
