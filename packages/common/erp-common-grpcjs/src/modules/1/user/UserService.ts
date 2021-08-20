// Original file: src/protos/1/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _user_IEntityMany, IEntityMany__Output as _user_IEntityMany__Output } from '../user/IEntityMany';
import type { IEntityOne as _user_IEntityOne, IEntityOne__Output as _user_IEntityOne__Output } from '../user/IEntityOne';

export interface UserServiceClient extends grpc.Client {
  CreateOne(argument: _user_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _user_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _user_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _user_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _user_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _user_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _user_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _user_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _user_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _user_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _user_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _user_IEntityMany, callback: (error?: grpc.ServiceError, result?: _user_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_IEntityMany, callback: (error?: grpc.ServiceError, result?: _user_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _user_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _user_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _user_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _user_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _user_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _user_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _user_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _user_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_IEntityOne, callback: (error?: grpc.ServiceError, result?: _user_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_user_IEntityOne__Output, _user_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_user_IEntityOne__Output, _user_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_user_IEntityMany__Output, _user_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_user_IEntityOne__Output, _user_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_user_IEntityOne__Output, _user_IEntityOne>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_user_IEntityOne, _user_IEntityOne, _user_IEntityOne__Output, _user_IEntityOne__Output>
  DeleteOne: MethodDefinition<_user_IEntityOne, _user_IEntityOne, _user_IEntityOne__Output, _user_IEntityOne__Output>
  SearchMany: MethodDefinition<_user_IEntityMany, _user_IEntityMany, _user_IEntityMany__Output, _user_IEntityMany__Output>
  SearchOne: MethodDefinition<_user_IEntityOne, _user_IEntityOne, _user_IEntityOne__Output, _user_IEntityOne__Output>
  UpdateOne: MethodDefinition<_user_IEntityOne, _user_IEntityOne, _user_IEntityOne__Output, _user_IEntityOne__Output>
}
