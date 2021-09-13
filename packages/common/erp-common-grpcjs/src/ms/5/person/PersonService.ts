// Original file: src/protos/5/person.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Create as _person_Create, Create__Output as _person_Create__Output } from '../person/Create';
import type { Delete as _person_Delete, Delete__Output as _person_Delete__Output } from '../person/Delete';
import type { Many as _person_Many, Many__Output as _person_Many__Output } from '../person/Many';
import type { One as _person_One, One__Output as _person_One__Output } from '../person/One';
import type { Search as _person_Search, Search__Output as _person_Search__Output } from '../person/Search';
import type { Update as _person_Update, Update__Output as _person_Update__Output } from '../person/Update';

export interface PersonServiceClient extends grpc.Client {
  CreateOne(argument: _person_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _person_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _person_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _person_Create, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _person_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _person_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _person_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _person_Create, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _person_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _person_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _person_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _person_Delete, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _person_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _person_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _person_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _person_Delete, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _person_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _person_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _person_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _person_Many, callback: (error?: grpc.ServiceError, result?: _person_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _person_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _person_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _person_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _person_Many, callback: (error?: grpc.ServiceError, result?: _person_Many__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _person_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _person_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _person_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _person_Search, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _person_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _person_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _person_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _person_Search, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _person_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _person_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _person_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _person_Update, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _person_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _person_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _person_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _person_Update, callback: (error?: grpc.ServiceError, result?: _person_One__Output) => void): grpc.ClientUnaryCall;
  
}

export interface PersonServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_person_Create__Output, _person_One>;
  
  DeleteOne: grpc.handleUnaryCall<_person_Delete__Output, _person_One>;
  
  SearchMany: grpc.handleUnaryCall<_person_Many__Output, _person_Many>;
  
  SearchOne: grpc.handleUnaryCall<_person_Search__Output, _person_One>;
  
  UpdateOne: grpc.handleUnaryCall<_person_Update__Output, _person_One>;
  
}

export interface PersonServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_person_Create, _person_One, _person_Create__Output, _person_One__Output>
  DeleteOne: MethodDefinition<_person_Delete, _person_One, _person_Delete__Output, _person_One__Output>
  SearchMany: MethodDefinition<_person_Many, _person_Many, _person_Many__Output, _person_Many__Output>
  SearchOne: MethodDefinition<_person_Search, _person_One, _person_Search__Output, _person_One__Output>
  UpdateOne: MethodDefinition<_person_Update, _person_One, _person_Update__Output, _person_One__Output>
}
