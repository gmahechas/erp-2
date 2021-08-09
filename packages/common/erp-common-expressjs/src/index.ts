import { IRequest } from './interfaces';

declare global {
	namespace Express {
		interface Request {
			irequest: IRequest
		}
	}
}

export * from './interfaces';
export * from './lambda';
export * from './middlewares';