// Original file: src/protos/1/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SingInRequest as _auth_SingInRequest, SingInRequest__Output as _auth_SingInRequest__Output } from '../auth/SingInRequest';
import type { SingInResponse as _auth_SingInResponse, SingInResponse__Output as _auth_SingInResponse__Output } from '../auth/SingInResponse';

export interface AuthServiceClient extends grpc.Client {
  Signin(argument: _auth_SingInRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_SingInResponse__Output) => void): grpc.ClientUnaryCall;
  Signin(argument: _auth_SingInRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _auth_SingInResponse__Output) => void): grpc.ClientUnaryCall;
  Signin(argument: _auth_SingInRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_SingInResponse__Output) => void): grpc.ClientUnaryCall;
  Signin(argument: _auth_SingInRequest, callback: (error?: grpc.ServiceError, result?: _auth_SingInResponse__Output) => void): grpc.ClientUnaryCall;
  signin(argument: _auth_SingInRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_SingInResponse__Output) => void): grpc.ClientUnaryCall;
  signin(argument: _auth_SingInRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _auth_SingInResponse__Output) => void): grpc.ClientUnaryCall;
  signin(argument: _auth_SingInRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_SingInResponse__Output) => void): grpc.ClientUnaryCall;
  signin(argument: _auth_SingInRequest, callback: (error?: grpc.ServiceError, result?: _auth_SingInResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  Signin: grpc.handleUnaryCall<_auth_SingInRequest__Output, _auth_SingInResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  Signin: MethodDefinition<_auth_SingInRequest, _auth_SingInResponse, _auth_SingInRequest__Output, _auth_SingInResponse__Output>
}
