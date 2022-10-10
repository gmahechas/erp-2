// Original file: src/protos/6/menu.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  Create as _menu_Create,
  Create__Output as _menu_Create__Output,
} from '../menu/Create';
import type {
  Delete as _menu_Delete,
  Delete__Output as _menu_Delete__Output,
} from '../menu/Delete';
import type {
  Many as _menu_Many,
  Many__Output as _menu_Many__Output,
} from '../menu/Many';
import type {
  One as _menu_One,
  One__Output as _menu_One__Output,
} from '../menu/One';
import type {
  Search as _menu_Search,
  Search__Output as _menu_Search__Output,
} from '../menu/Search';
import type {
  Update as _menu_Update,
  Update__Output as _menu_Update__Output,
} from '../menu/Update';

export interface MenuServiceClient extends grpc.Client {
  CreateOne(
    argument: _menu_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _menu_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _menu_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  CreateOne(
    argument: _menu_Create,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _menu_Create,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _menu_Create,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _menu_Create,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  createOne(
    argument: _menu_Create,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;

  DeleteOne(
    argument: _menu_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _menu_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _menu_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  DeleteOne(
    argument: _menu_Delete,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _menu_Delete,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _menu_Delete,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _menu_Delete,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  deleteOne(
    argument: _menu_Delete,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchMany(
    argument: _menu_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _menu_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _menu_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchMany(
    argument: _menu_Many,
    callback: (error?: grpc.ServiceError, result?: _menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _menu_Many,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _menu_Many,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _menu_Many,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;
  searchMany(
    argument: _menu_Many,
    callback: (error?: grpc.ServiceError, result?: _menu_Many__Output) => void,
  ): grpc.ClientUnaryCall;

  SearchOne(
    argument: _menu_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _menu_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _menu_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  SearchOne(
    argument: _menu_Search,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _menu_Search,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _menu_Search,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _menu_Search,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  searchOne(
    argument: _menu_Search,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;

  UpdateOne(
    argument: _menu_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _menu_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _menu_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  UpdateOne(
    argument: _menu_Update,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _menu_Update,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _menu_Update,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _menu_Update,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
  updateOne(
    argument: _menu_Update,
    callback: (error?: grpc.ServiceError, result?: _menu_One__Output) => void,
  ): grpc.ClientUnaryCall;
}

export interface MenuServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOne: grpc.handleUnaryCall<_menu_Create__Output, _menu_One>;

  DeleteOne: grpc.handleUnaryCall<_menu_Delete__Output, _menu_One>;

  SearchMany: grpc.handleUnaryCall<_menu_Many__Output, _menu_Many>;

  SearchOne: grpc.handleUnaryCall<_menu_Search__Output, _menu_One>;

  UpdateOne: grpc.handleUnaryCall<_menu_Update__Output, _menu_One>;
}

export interface MenuServiceDefinition extends grpc.ServiceDefinition {
  CreateOne: MethodDefinition<
    _menu_Create,
    _menu_One,
    _menu_Create__Output,
    _menu_One__Output
  >;
  DeleteOne: MethodDefinition<
    _menu_Delete,
    _menu_One,
    _menu_Delete__Output,
    _menu_One__Output
  >;
  SearchMany: MethodDefinition<
    _menu_Many,
    _menu_Many,
    _menu_Many__Output,
    _menu_Many__Output
  >;
  SearchOne: MethodDefinition<
    _menu_Search,
    _menu_One,
    _menu_Search__Output,
    _menu_One__Output
  >;
  UpdateOne: MethodDefinition<
    _menu_Update,
    _menu_One,
    _menu_Update__Output,
    _menu_One__Output
  >;
}
