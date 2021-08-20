// Original file: src/protos/3/city.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _city_IEntityMany, IEntityMany__Output as _city_IEntityMany__Output } from '../city/IEntityMany';
import type { IEntityOne as _city_IEntityOne, IEntityOne__Output as _city_IEntityOne__Output } from '../city/IEntityOne';

export interface CityServiceClient extends grpc.Client {
  CreateOne(argument: _city_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _city_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _city_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _city_IEntityOne, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _city_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _city_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _city_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _city_IEntityOne, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _city_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _city_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _city_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _city_IEntityOne, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _city_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _city_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _city_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _city_IEntityOne, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _city_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _city_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _city_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _city_IEntityMany, callback: (error?: grpc.ServiceError, result?: _city_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _city_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _city_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _city_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _city_IEntityMany, callback: (error?: grpc.ServiceError, result?: _city_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _city_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _city_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _city_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _city_IEntityOne, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _city_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _city_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _city_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _city_IEntityOne, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _city_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _city_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _city_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _city_IEntityOne, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _city_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _city_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _city_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _city_IEntityOne, callback: (error?: grpc.ServiceError, result?: _city_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface CityServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_city_IEntityOne__Output, _city_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_city_IEntityOne__Output, _city_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_city_IEntityMany__Output, _city_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_city_IEntityOne__Output, _city_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_city_IEntityOne__Output, _city_IEntityOne>;
  
}

export interface CityServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_city_IEntityOne, _city_IEntityOne, _city_IEntityOne__Output, _city_IEntityOne__Output>
  DeleteOne: MethodDefinition<_city_IEntityOne, _city_IEntityOne, _city_IEntityOne__Output, _city_IEntityOne__Output>
  SearchMany: MethodDefinition<_city_IEntityMany, _city_IEntityMany, _city_IEntityMany__Output, _city_IEntityMany__Output>
  SearchOne: MethodDefinition<_city_IEntityOne, _city_IEntityOne, _city_IEntityOne__Output, _city_IEntityOne__Output>
  UpdateOne: MethodDefinition<_city_IEntityOne, _city_IEntityOne, _city_IEntityOne__Output, _city_IEntityOne__Output>
}
