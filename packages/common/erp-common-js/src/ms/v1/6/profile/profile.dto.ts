export interface ICreateProfile {
  profileName: string;
  profileDescription: string;
}

export interface IUpdateProfile {
  id: string;
  profileName: string;
  profileDescription: string;
}

export interface IDeleteProfile {
  id: string;
}

export interface ISearchProfile {
  id: string;
  profileName: string;
  profileDescription: string;
}