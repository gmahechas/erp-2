export interface ICreateUserProfile {
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}

export interface IUpdateUserProfile {
  userProfileId: string;
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}

export interface IDeleteUserProfile {
  userProfileId: string;
}

export interface ISearchUserProfile {
  userProfileId: string;
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}