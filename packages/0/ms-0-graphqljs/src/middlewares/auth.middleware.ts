import express from 'express';
import { IAuth } from '@gmahechas/erp-common';
import { sendError } from '@gmahechas/erp-common-ms-utils-js';
import { IContext } from '@gmahechas/erp-common-graphqljs';

declare module 'express-session' {
	interface SessionData {
		auth?: IAuth
	}
}

export const authMiddleware = async (req: express.Request, res: express.Response): Promise<IContext> => {
	if (!(req.body.query.includes('signinAuth')) && !req.session.auth) {
		sendError('authentication_error')
	}
	return { req, res, auth: req.session.auth }
}