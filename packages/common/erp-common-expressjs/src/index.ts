
declare global {
	namespace Express {
		interface Request {
			irequest: IRequest
		}
	}
}

export * from './middlewares';