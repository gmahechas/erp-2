// Original file: src/protos/6/user-profile.proto

export interface Update {
  id?: string;
  userProfileStatus?: boolean;
  userId?: string;
  profileId?: string;
}

export interface Update__Output {
  id: string;
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}
