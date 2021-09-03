import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _auth_AuthServiceClient, AuthServiceDefinition as _auth_AuthServiceDefinition } from './auth/AuthService';
import type { UserServiceClient as _user_UserServiceClient, UserServiceDefinition as _user_UserServiceDefinition } from './user/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  auth: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _auth_AuthServiceClient> & { service: _auth_AuthServiceDefinition }
    SingInRequest: MessageTypeDefinition
    SingInResponse: MessageTypeDefinition
  }
  user: {
    Create: MessageTypeDefinition
    Delete: MessageTypeDefinition
    Many: MessageTypeDefinition
    One: MessageTypeDefinition
    Search: MessageTypeDefinition
    Update: MessageTypeDefinition
    User: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _user_UserServiceClient> & { service: _user_UserServiceDefinition }
  }
}

