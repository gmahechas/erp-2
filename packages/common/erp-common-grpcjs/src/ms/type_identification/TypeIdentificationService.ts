// Original file: src/protos/5/type-identification.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  Create as _type_identification_Create,
  Create__Output as _type_identification_Create__Output,
} from '../type_identification/Create';
import type {
  Delete as _type_identification_Delete,
  Delete__Output as _type_identification_Delete__Output,
} from '../type_identification/Delete';
import type {
  Many as _type_identification_Many,
  Many__Output as _type_identification_Many__Output,
} from '../type_identification/Many';
import type {
  One as _type_identification_One,
  One__Output as _type_identification_One__Output,
} from '../type_identification/One';
import type {
  Search as _type_identification_Search,
  Search__Output as _type_identification_Search__Output,
} from '../type_identification/Search';
import type {
  Update as _type_identification_Update,
  Update__Output as _type_identification_Update__Output,
} from '../type_identification/Update';

export interface TypeIdentificationServiceClient extends grpc.Client {
  CreateOne(
    argument: _type_identification_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _type_identification_Create,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _type_identification_Create,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _type_identification_Create,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _type_identification_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _type_identification_Create,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _type_identification_Create,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _type_identification_Create,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;

  DeleteOne(
    argument: _type_identification_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _type_identification_Delete,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _type_identification_Delete,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _type_identification_Delete,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _type_identification_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _type_identification_Delete,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _type_identification_Delete,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _type_identification_Delete,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;

  SearchMany(
    argument: _type_identification_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _type_identification_Many,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _type_identification_Many,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _type_identification_Many,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _type_identification_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _type_identification_Many,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _type_identification_Many,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _type_identification_Many,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_Many__Output,
    ) => void,
  ): grpc.ClientUnaryCall;

  SearchOne(
    argument: _type_identification_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _type_identification_Search,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _type_identification_Search,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _type_identification_Search,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _type_identification_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _type_identification_Search,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _type_identification_Search,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _type_identification_Search,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;

  UpdateOne(
    argument: _type_identification_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _type_identification_Update,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _type_identification_Update,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _type_identification_Update,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _type_identification_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _type_identification_Update,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _type_identification_Update,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _type_identification_Update,
    callback: (
      error?: grpc.ServiceError,
      result?: _type_identification_One__Output,
    ) => void,
  ): grpc.ClientUnaryCall;
}

export interface TypeIdentificationServiceHandlers
  extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<
    _type_identification_Create__Output,
    _type_identification_One
  >;

  DeleteOne: grpc.handleUnaryCall<
    _type_identification_Delete__Output,
    _type_identification_One
  >;

  SearchMany: grpc.handleUnaryCall<
    _type_identification_Many__Output,
    _type_identification_Many
  >;

  SearchOne: grpc.handleUnaryCall<
    _type_identification_Search__Output,
    _type_identification_One
  >;

  UpdateOne: grpc.handleUnaryCall<
    _type_identification_Update__Output,
    _type_identification_One
  >;
}

export interface TypeIdentificationServiceDefinition
  extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<
    _type_identification_Create,
    _type_identification_One,
    _type_identification_Create__Output,
    _type_identification_One__Output
  >;
  DeleteOne: MethodDefinition<
    _type_identification_Delete,
    _type_identification_One,
    _type_identification_Delete__Output,
    _type_identification_One__Output
  >;
  SearchMany: MethodDefinition<
    _type_identification_Many,
    _type_identification_Many,
    _type_identification_Many__Output,
    _type_identification_Many__Output
  >;
  SearchOne: MethodDefinition<
    _type_identification_Search,
    _type_identification_One,
    _type_identification_Search__Output,
    _type_identification_One__Output
  >;
  UpdateOne: MethodDefinition<
    _type_identification_Update,
    _type_identification_One,
    _type_identification_Update__Output,
    _type_identification_One__Output
  >;
}
