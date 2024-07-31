// Original file: src/protos/5/person.proto

export interface Create {
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

export interface Create__Output {
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
