// Original file: src/protos/5/type-identification.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _type_identification_IEntityMany, IEntityMany__Output as _type_identification_IEntityMany__Output } from '../type_identification/IEntityMany';
import type { IEntityOne as _type_identification_IEntityOne, IEntityOne__Output as _type_identification_IEntityOne__Output } from '../type_identification/IEntityOne';

export interface TypeIdentificationServiceClient extends grpc.Client {
  CreateOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _type_identification_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _type_identification_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _type_identification_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _type_identification_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _type_identification_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _type_identification_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _type_identification_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _type_identification_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _type_identification_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _type_identification_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _type_identification_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _type_identification_IEntityMany, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _type_identification_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _type_identification_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _type_identification_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _type_identification_IEntityMany, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _type_identification_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _type_identification_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _type_identification_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _type_identification_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _type_identification_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _type_identification_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _type_identification_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _type_identification_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _type_identification_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_identification_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface TypeIdentificationServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_type_identification_IEntityOne__Output, _type_identification_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_type_identification_IEntityOne__Output, _type_identification_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_type_identification_IEntityMany__Output, _type_identification_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_type_identification_IEntityOne__Output, _type_identification_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_type_identification_IEntityOne__Output, _type_identification_IEntityOne>;
  
}

export interface TypeIdentificationServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_type_identification_IEntityOne, _type_identification_IEntityOne, _type_identification_IEntityOne__Output, _type_identification_IEntityOne__Output>
  DeleteOne: MethodDefinition<_type_identification_IEntityOne, _type_identification_IEntityOne, _type_identification_IEntityOne__Output, _type_identification_IEntityOne__Output>
  SearchMany: MethodDefinition<_type_identification_IEntityMany, _type_identification_IEntityMany, _type_identification_IEntityMany__Output, _type_identification_IEntityMany__Output>
  SearchOne: MethodDefinition<_type_identification_IEntityOne, _type_identification_IEntityOne, _type_identification_IEntityOne__Output, _type_identification_IEntityOne__Output>
  UpdateOne: MethodDefinition<_type_identification_IEntityOne, _type_identification_IEntityOne, _type_identification_IEntityOne__Output, _type_identification_IEntityOne__Output>
}
