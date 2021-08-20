// Original file: src/protos/4/company.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IEntityMany as _company_IEntityMany, IEntityMany__Output as _company_IEntityMany__Output } from '../company/IEntityMany';
import type { IEntityOne as _company_IEntityOne, IEntityOne__Output as _company_IEntityOne__Output } from '../company/IEntityOne';

export interface CompanyServiceClient extends grpc.Client {
  CreateOne(argument: _company_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _company_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _company_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _company_IEntityOne, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _company_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _company_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _company_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _company_IEntityOne, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _company_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _company_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _company_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _company_IEntityOne, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _company_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _company_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _company_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _company_IEntityOne, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _company_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _company_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _company_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _company_IEntityMany, callback: (error?: grpc.ServiceError, result?: _company_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _company_IEntityMany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _company_IEntityMany, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _company_IEntityMany, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _company_IEntityMany, callback: (error?: grpc.ServiceError, result?: _company_IEntityMany__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _company_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _company_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _company_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _company_IEntityOne, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _company_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _company_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _company_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _company_IEntityOne, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _company_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _company_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _company_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _company_IEntityOne, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _company_IEntityOne, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _company_IEntityOne, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _company_IEntityOne, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _company_IEntityOne, callback: (error?: grpc.ServiceError, result?: _company_IEntityOne__Output) => void): grpc.ClientUnaryCall;
  
}

export interface CompanyServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_company_IEntityOne__Output, _company_IEntityOne>;
  
  DeleteOne: grpc.handleUnaryCall<_company_IEntityOne__Output, _company_IEntityOne>;
  
  SearchMany: grpc.handleUnaryCall<_company_IEntityMany__Output, _company_IEntityMany>;
  
  SearchOne: grpc.handleUnaryCall<_company_IEntityOne__Output, _company_IEntityOne>;
  
  UpdateOne: grpc.handleUnaryCall<_company_IEntityOne__Output, _company_IEntityOne>;
  
}

export interface CompanyServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_company_IEntityOne, _company_IEntityOne, _company_IEntityOne__Output, _company_IEntityOne__Output>
  DeleteOne: MethodDefinition<_company_IEntityOne, _company_IEntityOne, _company_IEntityOne__Output, _company_IEntityOne__Output>
  SearchMany: MethodDefinition<_company_IEntityMany, _company_IEntityMany, _company_IEntityMany__Output, _company_IEntityMany__Output>
  SearchOne: MethodDefinition<_company_IEntityOne, _company_IEntityOne, _company_IEntityOne__Output, _company_IEntityOne__Output>
  UpdateOne: MethodDefinition<_company_IEntityOne, _company_IEntityOne, _company_IEntityOne__Output, _company_IEntityOne__Output>
}
