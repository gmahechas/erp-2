// Original file: src/protos/4/company.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Create as _company_Create, Create__Output as _company_Create__Output } from '../company/Create';
import type { Delete as _company_Delete, Delete__Output as _company_Delete__Output } from '../company/Delete';
import type { Many as _company_Many, Many__Output as _company_Many__Output } from '../company/Many';
import type { One as _company_One, One__Output as _company_One__Output } from '../company/One';
import type { Search as _company_Search, Search__Output as _company_Search__Output } from '../company/Search';
import type { Update as _company_Update, Update__Output as _company_Update__Output } from '../company/Update';

export interface CompanyServiceClient extends grpc.Client {
  CreateOne(argument: _company_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _company_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _company_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  CreateOne(argument: _company_Create, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _company_Create, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _company_Create, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _company_Create, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  createOne(argument: _company_Create, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  
  DeleteOne(argument: _company_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _company_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _company_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  DeleteOne(argument: _company_Delete, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _company_Delete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _company_Delete, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _company_Delete, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  deleteOne(argument: _company_Delete, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  
  SearchMany(argument: _company_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _company_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _company_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_Many__Output) => void): grpc.ClientUnaryCall;
  SearchMany(argument: _company_Many, callback: (error?: grpc.ServiceError, result?: _company_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _company_Many, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _company_Many, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _company_Many, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_Many__Output) => void): grpc.ClientUnaryCall;
  searchMany(argument: _company_Many, callback: (error?: grpc.ServiceError, result?: _company_Many__Output) => void): grpc.ClientUnaryCall;
  
  SearchOne(argument: _company_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _company_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _company_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  SearchOne(argument: _company_Search, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _company_Search, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _company_Search, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _company_Search, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  searchOne(argument: _company_Search, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  
  UpdateOne(argument: _company_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _company_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _company_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  UpdateOne(argument: _company_Update, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _company_Update, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _company_Update, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _company_Update, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  updateOne(argument: _company_Update, callback: (error?: grpc.ServiceError, result?: _company_One__Output) => void): grpc.ClientUnaryCall;
  
}

export interface CompanyServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_company_Create__Output, _company_One>;
  
  DeleteOne: grpc.handleUnaryCall<_company_Delete__Output, _company_One>;
  
  SearchMany: grpc.handleUnaryCall<_company_Many__Output, _company_Many>;
  
  SearchOne: grpc.handleUnaryCall<_company_Search__Output, _company_One>;
  
  UpdateOne: grpc.handleUnaryCall<_company_Update__Output, _company_One>;
  
}

export interface CompanyServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_company_Create, _company_One, _company_Create__Output, _company_One__Output>
  DeleteOne: MethodDefinition<_company_Delete, _company_One, _company_Delete__Output, _company_One__Output>
  SearchMany: MethodDefinition<_company_Many, _company_Many, _company_Many__Output, _company_Many__Output>
  SearchOne: MethodDefinition<_company_Search, _company_One, _company_Search__Output, _company_One__Output>
  UpdateOne: MethodDefinition<_company_Update, _company_One, _company_Update__Output, _company_One__Output>
}
