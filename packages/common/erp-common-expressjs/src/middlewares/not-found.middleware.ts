import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '@gmahechas/erp-common';

export const notFoundMiddleware = (request: Request, response: Response, next: NextFunction) => { throw new NotFoundError() };