// Original file: src/protos/6/menu.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _menu_IEntityMany, IEntityMany__Output as _menu_IEntityMany__Output } from '../menu/IEntityMany';
import type { IEntityOne as _menu_IEntityOne, IEntityOne__Output as _menu_IEntityOne__Output } from '../menu/IEntityOne';

export interface MenuServiceClient extends grpc.Client {
  CreateOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _menu_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _menu_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _menu_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _menu_IEntityMany, callback: (error?: grpc.ServiceError, result?: _menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _menu_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _menu_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _menu_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _menu_IEntityMany, callback: (error?: grpc.ServiceError, result?: _menu_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _menu_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _menu_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _menu_IEntityOne, callback: (error?: grpc.ServiceError, result?: _menu_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface MenuServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_menu_IEntityOne__Output, _menu_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_menu_IEntityOne__Output, _menu_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_menu_IEntityMany__Output, _menu_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_menu_IEntityOne__Output, _menu_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_menu_IEntityOne__Output, _menu_IEntityOne>;
  
}

export interface MenuServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_menu_IEntityOne, _menu_IEntityOne, _menu_IEntityOne__Output, _menu_IEntityOne__Output>
  DeleteOne: MethodDefinition<_menu_IEntityOne, _menu_IEntityOne, _menu_IEntityOne__Output, _menu_IEntityOne__Output>
  SearchMany: MethodDefinition<_menu_IEntityMany, _menu_IEntityMany, _menu_IEntityMany__Output, _menu_IEntityMany__Output>
  SearchOne: MethodDefinition<_menu_IEntityOne, _menu_IEntityOne, _menu_IEntityOne__Output, _menu_IEntityOne__Output>
  UpdateOne: MethodDefinition<_menu_IEntityOne, _menu_IEntityOne, _menu_IEntityOne__Output, _menu_IEntityOne__Output>
}
