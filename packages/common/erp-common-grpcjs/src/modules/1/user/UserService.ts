// Original file: src/protos/1/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Create as _user_Create, Create__Output as _user_Create__Output } from '../user/Create';
import type { Delete as _user_Delete, Delete__Output as _user_Delete__Output } from '../user/Delete';
import type { Many as _user_Many, Many__Output as _user_Many__Output } from '../user/Many';
import type { One as _user_One, One__Output as _user_One__Output } from '../user/One';
import type { Search as _user_Search, Search__Output as _user_Search__Output } from '../user/Search';
import type { Update as _user_Update, Update__Output as _user_Update__Output } from '../user/Update';

export interface UserServiceClient extends grpc.Client {
  CreateOne(argument: _user_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _user_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _user_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _user_Create, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _user_Create, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _user_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _user_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _user_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _user_Delete, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _user_Delete, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _user_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _user_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _user_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _user_Many, callback: (error?: grpc.ServiceError, result?: _user_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _user_Many, callback: (error?: grpc.ServiceError, result?: _user_Many__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _user_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _user_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _user_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _user_Search, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _user_Search, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _user_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _user_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _user_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _user_Update, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _user_Update, callback: (error?: grpc.ServiceError, result?: _user_One__Output) => void): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_user_Create__Output, _user_One>;
  
  DeleteOne: grpc.handleUnaryCall<_user_Delete__Output, _user_One>;
  
  SearchMany: grpc.handleUnaryCall<_user_Many__Output, _user_Many>;
  
  SearchOne: grpc.handleUnaryCall<_user_Search__Output, _user_One>;
  
  UpdateOne: grpc.handleUnaryCall<_user_Update__Output, _user_One>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_user_Create, _user_One, _user_Create__Output, _user_One__Output>
  DeleteOne: MethodDefinition<_user_Delete, _user_One, _user_Delete__Output, _user_One__Output>
  SearchMany: MethodDefinition<_user_Many, _user_Many, _user_Many__Output, _user_Many__Output>
  SearchOne: MethodDefinition<_user_Search, _user_One, _user_Search__Output, _user_One__Output>
  UpdateOne: MethodDefinition<_user_Update, _user_One, _user_Update__Output, _user_One__Output>
}
