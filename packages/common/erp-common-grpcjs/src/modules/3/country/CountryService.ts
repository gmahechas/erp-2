// Original file: src/protos/3/country.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _country_IEntityMany, IEntityMany__Output as _country_IEntityMany__Output } from '../country/IEntityMany';
import type { IEntityOne as _country_IEntityOne, IEntityOne__Output as _country_IEntityOne__Output } from '../country/IEntityOne';

export interface CountryServiceClient extends grpc.Client {
  CreateOne(argument: _country_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _country_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _country_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _country_IEntityOne, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _country_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _country_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _country_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _country_IEntityOne, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _country_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _country_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _country_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _country_IEntityOne, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _country_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _country_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _country_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _country_IEntityOne, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _country_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _country_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _country_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _country_IEntityMany, callback: (error?: grpc.ServiceError, result?: _country_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _country_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _country_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _country_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _country_IEntityMany, callback: (error?: grpc.ServiceError, result?: _country_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _country_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _country_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _country_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _country_IEntityOne, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _country_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _country_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _country_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _country_IEntityOne, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _country_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _country_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _country_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _country_IEntityOne, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _country_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _country_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _country_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _country_IEntityOne, callback: (error?: grpc.ServiceError, result?: _country_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface CountryServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_country_IEntityOne__Output, _country_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_country_IEntityOne__Output, _country_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_country_IEntityMany__Output, _country_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_country_IEntityOne__Output, _country_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_country_IEntityOne__Output, _country_IEntityOne>;
  
}

export interface CountryServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_country_IEntityOne, _country_IEntityOne, _country_IEntityOne__Output, _country_IEntityOne__Output>
  DeleteOne: MethodDefinition<_country_IEntityOne, _country_IEntityOne, _country_IEntityOne__Output, _country_IEntityOne__Output>
  SearchMany: MethodDefinition<_country_IEntityMany, _country_IEntityMany, _country_IEntityMany__Output, _country_IEntityMany__Output>
  SearchOne: MethodDefinition<_country_IEntityOne, _country_IEntityOne, _country_IEntityOne__Output, _country_IEntityOne__Output>
  UpdateOne: MethodDefinition<_country_IEntityOne, _country_IEntityOne, _country_IEntityOne__Output, _country_IEntityOne__Output>
}
