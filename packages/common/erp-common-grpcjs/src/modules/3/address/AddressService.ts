// Original file: src/protos/3/address.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _address_IEntityMany, IEntityMany__Output as _address_IEntityMany__Output } from '../address/IEntityMany';
import type { IEntityOne as _address_IEntityOne, IEntityOne__Output as _address_IEntityOne__Output } from '../address/IEntityOne';

export interface AddressServiceClient extends grpc.Client {
  CreateOne(argument: _address_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _address_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _address_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _address_IEntityOne, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _address_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _address_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _address_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _address_IEntityOne, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _address_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _address_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _address_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _address_IEntityOne, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _address_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _address_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _address_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _address_IEntityOne, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _address_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _address_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _address_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _address_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _address_IEntityMany, callback: (error?: grpc.ServiceError, result?: _address_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _address_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _address_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _address_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _address_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _address_IEntityMany, callback: (error?: grpc.ServiceError, result?: _address_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _address_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _address_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _address_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _address_IEntityOne, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _address_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _address_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _address_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _address_IEntityOne, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _address_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _address_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _address_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _address_IEntityOne, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _address_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _address_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _address_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _address_IEntityOne, callback: (error?: grpc.ServiceError, result?: _address_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface AddressServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_address_IEntityOne__Output, _address_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_address_IEntityOne__Output, _address_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_address_IEntityMany__Output, _address_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_address_IEntityOne__Output, _address_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_address_IEntityOne__Output, _address_IEntityOne>;
  
}

export interface AddressServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_address_IEntityOne, _address_IEntityOne, _address_IEntityOne__Output, _address_IEntityOne__Output>
  DeleteOne: MethodDefinition<_address_IEntityOne, _address_IEntityOne, _address_IEntityOne__Output, _address_IEntityOne__Output>
  SearchMany: MethodDefinition<_address_IEntityMany, _address_IEntityMany, _address_IEntityMany__Output, _address_IEntityMany__Output>
  SearchOne: MethodDefinition<_address_IEntityOne, _address_IEntityOne, _address_IEntityOne__Output, _address_IEntityOne__Output>
  UpdateOne: MethodDefinition<_address_IEntityOne, _address_IEntityOne, _address_IEntityOne__Output, _address_IEntityOne__Output>
}
