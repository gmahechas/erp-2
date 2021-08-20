// Original file: src/protos/4/office.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _office_IEntityMany, IEntityMany__Output as _office_IEntityMany__Output } from '../office/IEntityMany';
import type { IEntityOne as _office_IEntityOne, IEntityOne__Output as _office_IEntityOne__Output } from '../office/IEntityOne';

export interface OfficeServiceClient extends grpc.Client {
  CreateOne(argument: _office_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _office_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _office_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _office_IEntityOne, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _office_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _office_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _office_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _office_IEntityOne, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _office_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _office_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _office_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _office_IEntityOne, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _office_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _office_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _office_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _office_IEntityOne, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _office_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _office_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _office_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _office_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _office_IEntityMany, callback: (error?: grpc.ServiceError, result?: _office_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _office_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _office_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _office_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _office_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _office_IEntityMany, callback: (error?: grpc.ServiceError, result?: _office_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _office_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _office_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _office_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _office_IEntityOne, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _office_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _office_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _office_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _office_IEntityOne, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _office_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _office_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _office_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _office_IEntityOne, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _office_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _office_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _office_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _office_IEntityOne, callback: (error?: grpc.ServiceError, result?: _office_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface OfficeServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_office_IEntityOne__Output, _office_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_office_IEntityOne__Output, _office_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_office_IEntityMany__Output, _office_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_office_IEntityOne__Output, _office_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_office_IEntityOne__Output, _office_IEntityOne>;
  
}

export interface OfficeServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_office_IEntityOne, _office_IEntityOne, _office_IEntityOne__Output, _office_IEntityOne__Output>
  DeleteOne: MethodDefinition<_office_IEntityOne, _office_IEntityOne, _office_IEntityOne__Output, _office_IEntityOne__Output>
  SearchMany: MethodDefinition<_office_IEntityMany, _office_IEntityMany, _office_IEntityMany__Output, _office_IEntityMany__Output>
  SearchOne: MethodDefinition<_office_IEntityOne, _office_IEntityOne, _office_IEntityOne__Output, _office_IEntityOne__Output>
  UpdateOne: MethodDefinition<_office_IEntityOne, _office_IEntityOne, _office_IEntityOne__Output, _office_IEntityOne__Output>
}
