// Original file: src/protos/4/office.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { Create as _office_Create, Create__Output as _office_Create__Output } from '../office/Create';
import type { Delete as _office_Delete, Delete__Output as _office_Delete__Output } from '../office/Delete';
import type { Many as _office_Many, Many__Output as _office_Many__Output } from '../office/Many';
import type { One as _office_One, One__Output as _office_One__Output } from '../office/One';
import type { Search as _office_Search, Search__Output as _office_Search__Output } from '../office/Search';
import type { Update as _office_Update, Update__Output as _office_Update__Output } from '../office/Update';

export interface OfficeServiceClient extends grpc.Client {
  CreateOne(
    argument: _office_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _office_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _office_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _office_Create,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _office_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _office_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _office_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _office_Create,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;

  DeleteOne(
    argument: _office_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _office_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _office_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _office_Delete,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _office_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _office_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _office_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _office_Delete,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchMany(
    argument: _office_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _office_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _office_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _office_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _office_Many,
    callback: (error?: grpc.ServiceError, result?: _office_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _office_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _office_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _office_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _office_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _office_Many,
    callback: (error?: grpc.ServiceError, result?: _office_Many__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchOne(
    argument: _office_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _office_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _office_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _office_Search,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _office_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _office_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _office_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _office_Search,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;

  UpdateOne(
    argument: _office_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _office_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _office_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _office_Update,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _office_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _office_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _office_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _office_Update,
    callback: (error?: grpc.ServiceError, result?: _office_One__Output) => void,
  ): grpc.ClientUnaryCall;
}

export interface OfficeServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_office_Create__Output, _office_One>;

  DeleteOne: grpc.handleUnaryCall<_office_Delete__Output, _office_One>;

  SearchMany: grpc.handleUnaryCall<_office_Many__Output, _office_Many>;

  SearchOne: grpc.handleUnaryCall<_office_Search__Output, _office_One>;

  UpdateOne: grpc.handleUnaryCall<_office_Update__Output, _office_One>;
}

export interface OfficeServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_office_Create, _office_One, _office_Create__Output, _office_One__Output>;
  DeleteOne: MethodDefinition<_office_Delete, _office_One, _office_Delete__Output, _office_One__Output>;
  SearchMany: MethodDefinition<_office_Many, _office_Many, _office_Many__Output, _office_Many__Output>;
  SearchOne: MethodDefinition<_office_Search, _office_One, _office_Search__Output, _office_One__Output>;
  UpdateOne: MethodDefinition<_office_Update, _office_One, _office_Update__Output, _office_One__Output>;
}
