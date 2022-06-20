export interface ICreateTypePerson {
  typePersonDescription: string;
  typePersonCode: string;
}

export interface IUpdateTypePerson {
  typePersonId: string;
  typePersonDescription: string;
  typePersonCode: string;
}

export interface IDeleteTypePerson {
  typePersonId: string;
}

export interface ISearchTypePerson {
  typePersonId: string;
  typePersonDescription: string;
  typePersonCode: string;
}