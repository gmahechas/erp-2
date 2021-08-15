import { IRequest } from '@gmahechas/erp-common';
export * from './middlewares';

declare global {
	namespace Express {
		interface Request {
			irequest: IRequest
		}
	}
}