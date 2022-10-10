import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { errorHandlerGrpc } from './error-handler.grpc';

type AsyncFunctionGrpc<A, B> = (call: ServerUnaryCall<A, B>, callback: sendUnaryData<B>) => Promise<void>;

export const asyncHandlerUnaryGrpc =
  <A, B>(execution: AsyncFunctionGrpc<A, B>) =>
  (call: ServerUnaryCall<A, B>, callback: sendUnaryData<B>) => {
    execution(call, callback).catch((error) => errorHandlerGrpc(error, callback));
  };
