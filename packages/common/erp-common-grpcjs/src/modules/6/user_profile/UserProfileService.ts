// Original file: src/protos/6/user-profile.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _user_profile_IEntityMany, IEntityMany__Output as _user_profile_IEntityMany__Output } from '../user_profile/IEntityMany';
import type { IEntityOne as _user_profile_IEntityOne, IEntityOne__Output as _user_profile_IEntityOne__Output } from '../user_profile/IEntityOne';

export interface UserProfileServiceClient extends grpc.Client {
  CreateOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _user_profile_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _user_profile_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_profile_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_profile_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _user_profile_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _user_profile_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_profile_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_profile_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _user_profile_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _user_profile_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _user_profile_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _user_profile_IEntityMany, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_profile_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_profile_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_profile_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_profile_IEntityMany, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _user_profile_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _user_profile_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_profile_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_profile_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _user_profile_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _user_profile_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_profile_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_profile_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_profile_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_profile_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface UserProfileServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_user_profile_IEntityOne__Output, _user_profile_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_user_profile_IEntityOne__Output, _user_profile_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_user_profile_IEntityMany__Output, _user_profile_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_user_profile_IEntityOne__Output, _user_profile_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_user_profile_IEntityOne__Output, _user_profile_IEntityOne>;
  
}

export interface UserProfileServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_user_profile_IEntityOne, _user_profile_IEntityOne, _user_profile_IEntityOne__Output, _user_profile_IEntityOne__Output>
  DeleteOne: MethodDefinition<_user_profile_IEntityOne, _user_profile_IEntityOne, _user_profile_IEntityOne__Output, _user_profile_IEntityOne__Output>
  SearchMany: MethodDefinition<_user_profile_IEntityMany, _user_profile_IEntityMany, _user_profile_IEntityMany__Output, _user_profile_IEntityMany__Output>
  SearchOne: MethodDefinition<_user_profile_IEntityOne, _user_profile_IEntityOne, _user_profile_IEntityOne__Output, _user_profile_IEntityOne__Output>
  UpdateOne: MethodDefinition<_user_profile_IEntityOne, _user_profile_IEntityOne, _user_profile_IEntityOne__Output, _user_profile_IEntityOne__Output>
}
