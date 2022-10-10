// Original file: src/protos/6/user-profile.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { Create as _user_profile_Create, Create__Output as _user_profile_Create__Output } from '../user_profile/Create';
import type { Delete as _user_profile_Delete, Delete__Output as _user_profile_Delete__Output } from '../user_profile/Delete';
import type { Many as _user_profile_Many, Many__Output as _user_profile_Many__Output } from '../user_profile/Many';
import type { One as _user_profile_One, One__Output as _user_profile_One__Output } from '../user_profile/One';
import type { Search as _user_profile_Search, Search__Output as _user_profile_Search__Output } from '../user_profile/Search';
import type { Update as _user_profile_Update, Update__Output as _user_profile_Update__Output } from '../user_profile/Update';

export interface UserProfileServiceClient extends grpc.Client {
  CreateOne(
    argument: _user_profile_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _user_profile_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _user_profile_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _user_profile_Create,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _user_profile_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _user_profile_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _user_profile_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _user_profile_Create,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;

  DeleteOne(
    argument: _user_profile_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _user_profile_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _user_profile_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _user_profile_Delete,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _user_profile_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _user_profile_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _user_profile_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _user_profile_Delete,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchMany(
    argument: _user_profile_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _user_profile_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _user_profile_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _user_profile_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _user_profile_Many,
    callback: (error?: grpc.ServiceError, result?: _user_profile_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _user_profile_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _user_profile_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _user_profile_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _user_profile_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _user_profile_Many,
    callback: (error?: grpc.ServiceError, result?: _user_profile_Many__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchOne(
    argument: _user_profile_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _user_profile_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _user_profile_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _user_profile_Search,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _user_profile_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _user_profile_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _user_profile_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _user_profile_Search,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;

  UpdateOne(
    argument: _user_profile_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _user_profile_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _user_profile_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _user_profile_Update,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _user_profile_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _user_profile_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _user_profile_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _user_profile_Update,
    callback: (error?: grpc.ServiceError, result?: _user_profile_One__Output) => void,
  ): grpc.ClientUnaryCall;
}

export interface UserProfileServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_user_profile_Create__Output, _user_profile_One>;

  DeleteOne: grpc.handleUnaryCall<_user_profile_Delete__Output, _user_profile_One>;

  SearchMany: grpc.handleUnaryCall<_user_profile_Many__Output, _user_profile_Many>;

  SearchOne: grpc.handleUnaryCall<_user_profile_Search__Output, _user_profile_One>;

  UpdateOne: grpc.handleUnaryCall<_user_profile_Update__Output, _user_profile_One>;
}

export interface UserProfileServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<
    _user_profile_Create,
    _user_profile_One,
    _user_profile_Create__Output,
    _user_profile_One__Output
  >;
  DeleteOne: MethodDefinition<
    _user_profile_Delete,
    _user_profile_One,
    _user_profile_Delete__Output,
    _user_profile_One__Output
  >;
  SearchMany: MethodDefinition<
    _user_profile_Many,
    _user_profile_Many,
    _user_profile_Many__Output,
    _user_profile_Many__Output
  >;
  SearchOne: MethodDefinition<
    _user_profile_Search,
    _user_profile_One,
    _user_profile_Search__Output,
    _user_profile_One__Output
  >;
  UpdateOne: MethodDefinition<
    _user_profile_Update,
    _user_profile_One,
    _user_profile_Update__Output,
    _user_profile_One__Output
  >;
}
