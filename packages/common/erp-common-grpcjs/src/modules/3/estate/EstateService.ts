// Original file: src/protos/3/estate.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Create as _estate_Create, Create__Output as _estate_Create__Output } from '../estate/Create';
import type { Delete as _estate_Delete, Delete__Output as _estate_Delete__Output } from '../estate/Delete';
import type { Many as _estate_Many, Many__Output as _estate_Many__Output } from '../estate/Many';
import type { One as _estate_One, One__Output as _estate_One__Output } from '../estate/One';
import type { Search as _estate_Search, Search__Output as _estate_Search__Output } from '../estate/Search';
import type { Update as _estate_Update, Update__Output as _estate_Update__Output } from '../estate/Update';

export interface EstateServiceClient extends grpc.Client {
  CreateOne(argument: _estate_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _estate_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _estate_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _estate_Create, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _estate_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _estate_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _estate_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _estate_Create, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _estate_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _estate_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _estate_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _estate_Delete, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _estate_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _estate_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _estate_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _estate_Delete, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _estate_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _estate_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _estate_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _estate_Many, callback: (error?: grpc.ServiceError, result?: _estate_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _estate_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _estate_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _estate_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _estate_Many, callback: (error?: grpc.ServiceError, result?: _estate_Many__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _estate_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _estate_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _estate_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _estate_Search, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _estate_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _estate_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _estate_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _estate_Search, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _estate_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _estate_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _estate_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _estate_Update, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _estate_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _estate_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _estate_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _estate_Update, callback: (error?: grpc.ServiceError, result?: _estate_One__Output) => void): grpc.ClientUnaryCall;
  
}

export interface EstateServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_estate_Create__Output, _estate_One>;
  
  DeleteOne: grpc.handleUnaryCall<_estate_Delete__Output, _estate_One>;
  
  SearchMany: grpc.handleUnaryCall<_estate_Many__Output, _estate_Many>;
  
  SearchOne: grpc.handleUnaryCall<_estate_Search__Output, _estate_One>;
  
  UpdateOne: grpc.handleUnaryCall<_estate_Update__Output, _estate_One>;
  
}

export interface EstateServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_estate_Create, _estate_One, _estate_Create__Output, _estate_One__Output>
  DeleteOne: MethodDefinition<_estate_Delete, _estate_One, _estate_Delete__Output, _estate_One__Output>
  SearchMany: MethodDefinition<_estate_Many, _estate_Many, _estate_Many__Output, _estate_Many__Output>
  SearchOne: MethodDefinition<_estate_Search, _estate_One, _estate_Search__Output, _estate_One__Output>
  UpdateOne: MethodDefinition<_estate_Update, _estate_One, _estate_Update__Output, _estate_One__Output>
}
