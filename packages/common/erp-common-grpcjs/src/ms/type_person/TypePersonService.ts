// Original file: src/protos/5/type-person.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { Create as _type_person_Create, Create__Output as _type_person_Create__Output } from '../type_person/Create';
import type { Delete as _type_person_Delete, Delete__Output as _type_person_Delete__Output } from '../type_person/Delete';
import type { Many as _type_person_Many, Many__Output as _type_person_Many__Output } from '../type_person/Many';
import type { One as _type_person_One, One__Output as _type_person_One__Output } from '../type_person/One';
import type { Search as _type_person_Search, Search__Output as _type_person_Search__Output } from '../type_person/Search';
import type { Update as _type_person_Update, Update__Output as _type_person_Update__Output } from '../type_person/Update';

export interface TypePersonServiceClient extends grpc.Client {
  CreateOne(
    argument: _type_person_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _type_person_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _type_person_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _type_person_Create,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _type_person_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _type_person_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _type_person_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _type_person_Create,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;

  DeleteOne(
    argument: _type_person_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _type_person_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _type_person_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _type_person_Delete,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _type_person_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _type_person_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _type_person_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _type_person_Delete,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchMany(
    argument: _type_person_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _type_person_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _type_person_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _type_person_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _type_person_Many,
    callback: (error?: grpc.ServiceError, result?: _type_person_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _type_person_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _type_person_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _type_person_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _type_person_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _type_person_Many,
    callback: (error?: grpc.ServiceError, result?: _type_person_Many__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchOne(
    argument: _type_person_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _type_person_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _type_person_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _type_person_Search,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _type_person_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _type_person_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _type_person_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _type_person_Search,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;

  UpdateOne(
    argument: _type_person_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _type_person_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _type_person_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _type_person_Update,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _type_person_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _type_person_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _type_person_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _type_person_Update,
    callback: (error?: grpc.ServiceError, result?: _type_person_One__Output) => void,
  ): grpc.ClientUnaryCall;
}

export interface TypePersonServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_type_person_Create__Output, _type_person_One>;

  DeleteOne: grpc.handleUnaryCall<_type_person_Delete__Output, _type_person_One>;

  SearchMany: grpc.handleUnaryCall<_type_person_Many__Output, _type_person_Many>;

  SearchOne: grpc.handleUnaryCall<_type_person_Search__Output, _type_person_One>;

  UpdateOne: grpc.handleUnaryCall<_type_person_Update__Output, _type_person_One>;
}

export interface TypePersonServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_type_person_Create, _type_person_One, _type_person_Create__Output, _type_person_One__Output>;
  DeleteOne: MethodDefinition<_type_person_Delete, _type_person_One, _type_person_Delete__Output, _type_person_One__Output>;
  SearchMany: MethodDefinition<_type_person_Many, _type_person_Many, _type_person_Many__Output, _type_person_Many__Output>;
  SearchOne: MethodDefinition<_type_person_Search, _type_person_One, _type_person_Search__Output, _type_person_One__Output>;
  UpdateOne: MethodDefinition<_type_person_Update, _type_person_One, _type_person_Update__Output, _type_person_One__Output>;
}
