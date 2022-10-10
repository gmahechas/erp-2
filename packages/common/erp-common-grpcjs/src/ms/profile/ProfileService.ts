// Original file: src/protos/6/profile.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  Create as _profile_Create,
  Create__Output as _profile_Create__Output,
} from '../profile/Create';
import type {
  Delete as _profile_Delete,
  Delete__Output as _profile_Delete__Output,
} from '../profile/Delete';
import type {
  Many as _profile_Many,
  Many__Output as _profile_Many__Output,
} from '../profile/Many';
import type {
  One as _profile_One,
  One__Output as _profile_One__Output,
} from '../profile/One';
import type {
  Search as _profile_Search,
  Search__Output as _profile_Search__Output,
} from '../profile/Search';
import type {
  Update as _profile_Update,
  Update__Output as _profile_Update__Output,
} from '../profile/Update';

export interface ProfileServiceClient extends grpc.Client {
  CreateOne(
    argument: _profile_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _profile_Create,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _profile_Create,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _profile_Create,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _profile_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _profile_Create,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _profile_Create,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _profile_Create,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;

  DeleteOne(
    argument: _profile_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _profile_Delete,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _profile_Delete,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _profile_Delete,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _profile_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _profile_Delete,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _profile_Delete,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _profile_Delete,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;

  SearchMany(
    argument: _profile_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _profile_Many,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _profile_Many,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _profile_Many,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _profile_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _profile_Many,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _profile_Many,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _profile_Many,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;

  SearchOne(
    argument: _profile_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _profile_Search,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _profile_Search,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _profile_Search,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _profile_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _profile_Search,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _profile_Search,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _profile_Search,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;

  UpdateOne(
    argument: _profile_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _profile_Update,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _profile_Update,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _profile_Update,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _profile_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _profile_Update,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _profile_Update,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _profile_Update,
    callback: (
      error?: grpc.ServiceError,
      result?: _profile_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
}

export interface ProfileServiceHandlers
  extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_profile_Create__Output, _profile_One>;

  DeleteOne: grpc.handleUnaryCall<_profile_Delete__Output, _profile_One>;

  SearchMany: grpc.handleUnaryCall<_profile_Many__Output, _profile_Many>;

  SearchOne: grpc.handleUnaryCall<_profile_Search__Output, _profile_One>;

  UpdateOne: grpc.handleUnaryCall<_profile_Update__Output, _profile_One>;
}

export interface ProfileServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<
    _profile_Create,
    _profile_One,
    _profile_Create__Output,
    _profile_One__Output
  >;
  DeleteOne: MethodDefinition<
    _profile_Delete,
    _profile_One,
    _profile_Delete__Output,
    _profile_One__Output
  >;
  SearchMany: MethodDefinition<
    _profile_Many,
    _profile_Many,
    _profile_Many__Output,
    _profile_Many__Output
  >;
  SearchOne: MethodDefinition<
    _profile_Search,
    _profile_One,
    _profile_Search__Output,
    _profile_One__Output
  >;
  UpdateOne: MethodDefinition<
    _profile_Update,
    _profile_One,
    _profile_Update__Output,
    _profile_One__Output
  >;
}
