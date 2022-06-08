export interface ICreateUserProfile {
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}

export interface IUpdateUserProfile {
  id: string;
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}

export interface IDeleteUserProfile {
  id: string;
}

export interface ISearchUserProfile {
  id: string;
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}