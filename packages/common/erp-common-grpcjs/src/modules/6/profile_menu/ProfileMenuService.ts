// Original file: src/protos/6/profile-menu.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _profile_menu_IEntityMany, IEntityMany__Output as _profile_menu_IEntityMany__Output } from '../profile_menu/IEntityMany';
import type { IEntityOne as _profile_menu_IEntityOne, IEntityOne__Output as _profile_menu_IEntityOne__Output } from '../profile_menu/IEntityOne';

export interface ProfileMenuServiceClient extends grpc.Client {
  CreateOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _profile_menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _profile_menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _profile_menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _profile_menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _profile_menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _profile_menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _profile_menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _profile_menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _profile_menu_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _profile_menu_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _profile_menu_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _profile_menu_IEntityMany, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _profile_menu_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _profile_menu_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _profile_menu_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _profile_menu_IEntityMany, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _profile_menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _profile_menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _profile_menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _profile_menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _profile_menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _profile_menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _profile_menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _profile_menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _profile_menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _profile_menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface ProfileMenuServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_profile_menu_IEntityOne__Output, _profile_menu_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_profile_menu_IEntityOne__Output, _profile_menu_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_profile_menu_IEntityMany__Output, _profile_menu_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_profile_menu_IEntityOne__Output, _profile_menu_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_profile_menu_IEntityOne__Output, _profile_menu_IEntityOne>;
  
}

export interface ProfileMenuServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_profile_menu_IEntityOne, _profile_menu_IEntityOne, _profile_menu_IEntityOne__Output, _profile_menu_IEntityOne__Output>
  DeleteOne: MethodDefinition<_profile_menu_IEntityOne, _profile_menu_IEntityOne, _profile_menu_IEntityOne__Output, _profile_menu_IEntityOne__Output>
  SearchMany: MethodDefinition<_profile_menu_IEntityMany, _profile_menu_IEntityMany, _profile_menu_IEntityMany__Output, _profile_menu_IEntityMany__Output>
  SearchOne: MethodDefinition<_profile_menu_IEntityOne, _profile_menu_IEntityOne, _profile_menu_IEntityOne__Output, _profile_menu_IEntityOne__Output>
  UpdateOne: MethodDefinition<_profile_menu_IEntityOne, _profile_menu_IEntityOne, _profile_menu_IEntityOne__Output, _profile_menu_IEntityOne__Output>
}
