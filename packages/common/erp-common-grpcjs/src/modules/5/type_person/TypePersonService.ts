// Original file: src/protos/5/type-person.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _type_person_IEntityMany, IEntityMany__Output as _type_person_IEntityMany__Output } from '../type_person/IEntityMany';
import type { IEntityOne as _type_person_IEntityOne, IEntityOne__Output as _type_person_IEntityOne__Output } from '../type_person/IEntityOne';

export interface TypePersonServiceClient extends grpc.Client {
  CreateOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _type_person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _type_person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _type_person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _type_person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _type_person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _type_person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _type_person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _type_person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _type_person_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _type_person_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _type_person_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _type_person_IEntityMany, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _type_person_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _type_person_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _type_person_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _type_person_IEntityMany, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _type_person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _type_person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _type_person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _type_person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _type_person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _type_person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _type_person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _type_person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _type_person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _type_person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface TypePersonServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_type_person_IEntityOne__Output, _type_person_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_type_person_IEntityOne__Output, _type_person_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_type_person_IEntityMany__Output, _type_person_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_type_person_IEntityOne__Output, _type_person_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_type_person_IEntityOne__Output, _type_person_IEntityOne>;
  
}

export interface TypePersonServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_type_person_IEntityOne, _type_person_IEntityOne, _type_person_IEntityOne__Output, _type_person_IEntityOne__Output>
  DeleteOne: MethodDefinition<_type_person_IEntityOne, _type_person_IEntityOne, _type_person_IEntityOne__Output, _type_person_IEntityOne__Output>
  SearchMany: MethodDefinition<_type_person_IEntityMany, _type_person_IEntityMany, _type_person_IEntityMany__Output, _type_person_IEntityMany__Output>
  SearchOne: MethodDefinition<_type_person_IEntityOne, _type_person_IEntityOne, _type_person_IEntityOne__Output, _type_person_IEntityOne__Output>
  UpdateOne: MethodDefinition<_type_person_IEntityOne, _type_person_IEntityOne, _type_person_IEntityOne__Output, _type_person_IEntityOne__Output>
}
