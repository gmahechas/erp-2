import { Request, Response, NextFunction } from 'express';
import { sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

export const notFoundMiddleware = (request: Request, response: Response, next: NextFunction) =>
  sendError(TypeErrorMessage.NOT_FOUND);
