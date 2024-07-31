// Original file: src/protos/3/address.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { Create as _address_Create, Create__Output as _address_Create__Output } from '../address/Create';
import type { Delete as _address_Delete, Delete__Output as _address_Delete__Output } from '../address/Delete';
import type { Many as _address_Many, Many__Output as _address_Many__Output } from '../address/Many';
import type { One as _address_One, One__Output as _address_One__Output } from '../address/One';
import type { Search as _address_Search, Search__Output as _address_Search__Output } from '../address/Search';
import type { Update as _address_Update, Update__Output as _address_Update__Output } from '../address/Update';

export interface AddressServiceClient extends grpc.Client {
  CreateOne(
    argument: _address_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _address_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _address_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _address_Create,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _address_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _address_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _address_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _address_Create,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;

  DeleteOne(
    argument: _address_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _address_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _address_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _address_Delete,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _address_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _address_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _address_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _address_Delete,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchMany(
    argument: _address_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _address_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _address_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _address_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _address_Many,
    callback: (error?: grpc.ServiceError, result?: _address_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _address_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _address_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _address_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _address_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _address_Many,
    callback: (error?: grpc.ServiceError, result?: _address_Many__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchOne(
    argument: _address_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _address_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _address_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _address_Search,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _address_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _address_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _address_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _address_Search,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;

  UpdateOne(
    argument: _address_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _address_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _address_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _address_Update,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _address_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _address_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _address_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _address_Update,
    callback: (error?: grpc.ServiceError, result?: _address_One__Output) => void,
  ): grpc.ClientUnaryCall;
}

export interface AddressServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_address_Create__Output, _address_One>;

  DeleteOne: grpc.handleUnaryCall<_address_Delete__Output, _address_One>;

  SearchMany: grpc.handleUnaryCall<_address_Many__Output, _address_Many>;

  SearchOne: grpc.handleUnaryCall<_address_Search__Output, _address_One>;

  UpdateOne: grpc.handleUnaryCall<_address_Update__Output, _address_One>;
}

export interface AddressServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<_address_Create, _address_One, _address_Create__Output, _address_One__Output>;
  DeleteOne: MethodDefinition<_address_Delete, _address_One, _address_Delete__Output, _address_One__Output>;
  SearchMany: MethodDefinition<_address_Many, _address_Many, _address_Many__Output, _address_Many__Output>;
  SearchOne: MethodDefinition<_address_Search, _address_One, _address_Search__Output, _address_One__Output>;
  UpdateOne: MethodDefinition<_address_Update, _address_One, _address_Update__Output, _address_One__Output>;
}
