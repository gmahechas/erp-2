export interface ICreateProfile {
  profileName: string;
  profileDescription: string;
}

export interface IUpdateProfile {
  profileId: string;
  profileName: string;
  profileDescription: string;
}

export interface IDeleteProfile {
  profileId: string;
}

export interface ISearchProfile {
  profileId: string;
  profileName: string;
  profileDescription: string;
}