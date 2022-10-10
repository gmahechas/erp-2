// Original file: src/protos/1/auth.proto

export interface SingInResponse {
  id?: string;
  userName?: string;
  personId?: string;
  jwt?: string;
}

export interface SingInResponse__Output {
  id: string;
  userName: string;
  personId: string;
  jwt: string;
}
