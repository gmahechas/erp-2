export interface ICreateTypePerson {
  typePersonDescription: string;
  typePersonCode: string;
}

export interface IUpdateTypePerson {
  id: string;
  typePersonDescription: string;
  typePersonCode: string;
}

export interface IDeleteTypePerson {
  id: string;
}

export interface ISearchTypePerson {
  id: string;
  typePersonDescription: string;
  typePersonCode: string;
}