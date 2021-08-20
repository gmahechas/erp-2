// Original file: src/protos/5/person.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _person_IEntityMany, IEntityMany__Output as _person_IEntityMany__Output } from '../person/IEntityMany';
import type { IEntityOne as _person_IEntityOne, IEntityOne__Output as _person_IEntityOne__Output } from '../person/IEntityOne';

export interface PersonServiceClient extends grpc.Client {
  CreateOne(argument: _person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _person_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _person_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _person_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _person_IEntityMany, callback: (error?: grpc.ServiceError, result?: _person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _person_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _person_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _person_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _person_IEntityMany, callback: (error?: grpc.ServiceError, result?: _person_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _person_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _person_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _person_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _person_IEntityOne, callback: (error?: grpc.ServiceError, result?: _person_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface PersonServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_person_IEntityOne__Output, _person_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_person_IEntityOne__Output, _person_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_person_IEntityMany__Output, _person_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_person_IEntityOne__Output, _person_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_person_IEntityOne__Output, _person_IEntityOne>;
  
}

export interface PersonServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_person_IEntityOne, _person_IEntityOne, _person_IEntityOne__Output, _person_IEntityOne__Output>
  DeleteOne: MethodDefinition<_person_IEntityOne, _person_IEntityOne, _person_IEntityOne__Output, _person_IEntityOne__Output>
  SearchMany: MethodDefinition<_person_IEntityMany, _person_IEntityMany, _person_IEntityMany__Output, _person_IEntityMany__Output>
  SearchOne: MethodDefinition<_person_IEntityOne, _person_IEntityOne, _person_IEntityOne__Output, _person_IEntityOne__Output>
  UpdateOne: MethodDefinition<_person_IEntityOne, _person_IEntityOne, _person_IEntityOne__Output, _person_IEntityOne__Output>
}
