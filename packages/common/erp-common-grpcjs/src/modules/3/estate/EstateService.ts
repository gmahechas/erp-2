// Original file: src/protos/3/estate.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _estate_IEntityMany, IEntityMany__Output as _estate_IEntityMany__Output } from '../estate/IEntityMany';
import type { IEntityOne as _estate_IEntityOne, IEntityOne__Output as _estate_IEntityOne__Output } from '../estate/IEntityOne';

export interface EstateServiceClient extends grpc.Client {
  CreateOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _estate_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _estate_IEntityOne, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _estate_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _estate_IEntityOne, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _estate_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _estate_IEntityOne, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _estate_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _estate_IEntityOne, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _estate_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _estate_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _estate_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _estate_IEntityMany, callback: (error?: grpc.ServiceError, result?: _estate_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _estate_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _estate_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _estate_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _estate_IEntityMany, callback: (error?: grpc.ServiceError, result?: _estate_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _estate_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _estate_IEntityOne, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _estate_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _estate_IEntityOne, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _estate_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _estate_IEntityOne, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _estate_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _estate_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _estate_IEntityOne, callback: (error?: grpc.ServiceError, result?: _estate_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface EstateServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_estate_IEntityOne__Output, _estate_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_estate_IEntityOne__Output, _estate_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_estate_IEntityMany__Output, _estate_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_estate_IEntityOne__Output, _estate_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_estate_IEntityOne__Output, _estate_IEntityOne>;
  
}

export interface EstateServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_estate_IEntityOne, _estate_IEntityOne, _estate_IEntityOne__Output, _estate_IEntityOne__Output>
  DeleteOne: MethodDefinition<_estate_IEntityOne, _estate_IEntityOne, _estate_IEntityOne__Output, _estate_IEntityOne__Output>
  SearchMany: MethodDefinition<_estate_IEntityMany, _estate_IEntityMany, _estate_IEntityMany__Output, _estate_IEntityMany__Output>
  SearchOne: MethodDefinition<_estate_IEntityOne, _estate_IEntityOne, _estate_IEntityOne__Output, _estate_IEntityOne__Output>
  UpdateOne: MethodDefinition<_estate_IEntityOne, _estate_IEntityOne, _estate_IEntityOne__Output, _estate_IEntityOne__Output>
}
