// Original file: src/protos/3/country.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Create as _country_Create, Create__Output as _country_Create__Output } from '../country/Create';
import type { Delete as _country_Delete, Delete__Output as _country_Delete__Output } from '../country/Delete';
import type { Many as _country_Many, Many__Output as _country_Many__Output } from '../country/Many';
import type { One as _country_One, One__Output as _country_One__Output } from '../country/One';
import type { Search as _country_Search, Search__Output as _country_Search__Output } from '../country/Search';
import type { Update as _country_Update, Update__Output as _country_Update__Output } from '../country/Update';

export interface CountryServiceClient extends grpc.Client {
  CreateOne(argument: _country_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _country_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _country_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _country_Create, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _country_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _country_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _country_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _country_Create, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _country_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _country_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _country_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _country_Delete, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _country_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _country_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _country_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _country_Delete, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _country_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _country_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _country_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _country_Many, callback: (error?: grpc.ServiceError, result?: _country_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _country_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _country_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _country_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _country_Many, callback: (error?: grpc.ServiceError, result?: _country_Many__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _country_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _country_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _country_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _country_Search, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _country_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _country_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _country_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _country_Search, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _country_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _country_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _country_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _country_Update, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _country_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _country_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _country_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _country_Update, callback: (error?: grpc.ServiceError, result?: _country_One__Output) => void): grpc.ClientUnaryCall;
  
}

export interface CountryServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_country_Create__Output, _country_One>;
  
  DeleteOne: grpc.handleUnaryCall<_country_Delete__Output, _country_One>;
  
  SearchMany: grpc.handleUnaryCall<_country_Many__Output, _country_Many>;
  
  SearchOne: grpc.handleUnaryCall<_country_Search__Output, _country_One>;
  
  UpdateOne: grpc.handleUnaryCall<_country_Update__Output, _country_One>;
  
}

export interface CountryServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_country_Create, _country_One, _country_Create__Output, _country_One__Output>
  DeleteOne: MethodDefinition<_country_Delete, _country_One, _country_Delete__Output, _country_One__Output>
  SearchMany: MethodDefinition<_country_Many, _country_Many, _country_Many__Output, _country_Many__Output>
  SearchOne: MethodDefinition<_country_Search, _country_One, _country_Search__Output, _country_One__Output>
  UpdateOne: MethodDefinition<_country_Update, _country_One, _country_Update__Output, _country_One__Output>
}
