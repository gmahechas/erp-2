// Original file: src/protos/3/city.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Create as _city_Create, Create__Output as _city_Create__Output } from '../city/Create';
import type { Delete as _city_Delete, Delete__Output as _city_Delete__Output } from '../city/Delete';
import type { Many as _city_Many, Many__Output as _city_Many__Output } from '../city/Many';
import type { One as _city_One, One__Output as _city_One__Output } from '../city/One';
import type { Search as _city_Search, Search__Output as _city_Search__Output } from '../city/Search';
import type { Update as _city_Update, Update__Output as _city_Update__Output } from '../city/Update';

export interface CityServiceClient extends grpc.Client {
  CreateOne(argument: _city_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _city_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _city_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _city_Create, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _city_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _city_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _city_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _city_Create, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _city_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _city_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _city_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _city_Delete, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _city_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _city_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _city_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _city_Delete, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _city_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _city_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _city_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _city_Many, callback: (error?: grpc.ServiceError, result?: _city_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _city_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _city_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _city_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _city_Many, callback: (error?: grpc.ServiceError, result?: _city_Many__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _city_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _city_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _city_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _city_Search, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _city_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _city_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _city_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _city_Search, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _city_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _city_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _city_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _city_Update, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _city_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _city_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _city_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _city_Update, callback: (error?: grpc.ServiceError, result?: _city_One__Output) => void): grpc.ClientUnaryCall;
  
}

export interface CityServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_city_Create__Output, _city_One>;
  
  DeleteOne: grpc.handleUnaryCall<_city_Delete__Output, _city_One>;
  
  SearchMany: grpc.handleUnaryCall<_city_Many__Output, _city_Many>;
  
  SearchOne: grpc.handleUnaryCall<_city_Search__Output, _city_One>;
  
  UpdateOne: grpc.handleUnaryCall<_city_Update__Output, _city_One>;
  
}

export interface CityServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_city_Create, _city_One, _city_Create__Output, _city_One__Output>
  DeleteOne: MethodDefinition<_city_Delete, _city_One, _city_Delete__Output, _city_One__Output>
  SearchMany: MethodDefinition<_city_Many, _city_Many, _city_Many__Output, _city_Many__Output>
  SearchOne: MethodDefinition<_city_Search, _city_One, _city_Search__Output, _city_One__Output>
  UpdateOne: MethodDefinition<_city_Update, _city_One, _city_Update__Output, _city_One__Output>
}
