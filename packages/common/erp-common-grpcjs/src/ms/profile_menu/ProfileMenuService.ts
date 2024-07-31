// Original file: src/protos/6/profile-menu.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { Create as _profile_menu_Create, Create__Output as _profile_menu_Create__Output } from '../profile_menu/Create';
import type { Delete as _profile_menu_Delete, Delete__Output as _profile_menu_Delete__Output } from '../profile_menu/Delete';
import type { Many as _profile_menu_Many, Many__Output as _profile_menu_Many__Output } from '../profile_menu/Many';
import type { One as _profile_menu_One, One__Output as _profile_menu_One__Output } from '../profile_menu/One';
import type { Search as _profile_menu_Search, Search__Output as _profile_menu_Search__Output } from '../profile_menu/Search';
import type { Update as _profile_menu_Update, Update__Output as _profile_menu_Update__Output } from '../profile_menu/Update';

export interface ProfileMenuServiceClient extends grpc.Client {
  CreateOne(
    argument: _profile_menu_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _profile_menu_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _profile_menu_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _profile_menu_Create,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _profile_menu_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _profile_menu_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _profile_menu_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _profile_menu_Create,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;

  DeleteOne(
    argument: _profile_menu_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _profile_menu_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _profile_menu_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _profile_menu_Delete,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _profile_menu_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _profile_menu_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _profile_menu_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _profile_menu_Delete,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchMany(
    argument: _profile_menu_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _profile_menu_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _profile_menu_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _profile_menu_Many,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _profile_menu_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _profile_menu_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _profile_menu_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _profile_menu_Many,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchOne(
    argument: _profile_menu_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _profile_menu_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _profile_menu_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _profile_menu_Search,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _profile_menu_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _profile_menu_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _profile_menu_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _profile_menu_Search,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;

  UpdateOne(
    argument: _profile_menu_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _profile_menu_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _profile_menu_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _profile_menu_Update,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _profile_menu_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _profile_menu_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _profile_menu_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _profile_menu_Update,
    callback: (error?: grpc.ServiceError, result?: _profile_menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
}

export interface ProfileMenuServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_profile_menu_Create__Output, _profile_menu_One>;

  DeleteOne: grpc.handleUnaryCall<_profile_menu_Delete__Output, _profile_menu_One>;

  SearchMany: grpc.handleUnaryCall<_profile_menu_Many__Output, _profile_menu_Many>;

  SearchOne: grpc.handleUnaryCall<_profile_menu_Search__Output, _profile_menu_One>;

  UpdateOne: grpc.handleUnaryCall<_profile_menu_Update__Output, _profile_menu_One>;
}

export interface ProfileMenuServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<
    _profile_menu_Create,
    _profile_menu_One,
    _profile_menu_Create__Output,
    _profile_menu_One__Output
  >;
  DeleteOne: MethodDefinition<
    _profile_menu_Delete,
    _profile_menu_One,
    _profile_menu_Delete__Output,
    _profile_menu_One__Output
  >;
  SearchMany: MethodDefinition<
    _profile_menu_Many,
    _profile_menu_Many,
    _profile_menu_Many__Output,
    _profile_menu_Many__Output
  >;
  SearchOne: MethodDefinition<
    _profile_menu_Search,
    _profile_menu_One,
    _profile_menu_Search__Output,
    _profile_menu_One__Output
  >;
  UpdateOne: MethodDefinition<
    _profile_menu_Update,
    _profile_menu_One,
    _profile_menu_Update__Output,
    _profile_menu_One__Output
  >;
}
