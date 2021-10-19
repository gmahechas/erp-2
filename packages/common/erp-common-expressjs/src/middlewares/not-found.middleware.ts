import { Request, Response, NextFunction } from 'express';
import { sendError } from '@gmahechas/erp-common-ms-utils-js';

export const notFoundMiddleware = (request: Request, response: Response, next: NextFunction) => sendError('not_found');