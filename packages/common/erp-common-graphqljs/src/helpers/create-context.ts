import { Request, Response } from 'express';
import { IAuth } from '@gmahechas/erp-common';
import { jwtDecode } from '@gmahechas/erp-common-ms-utils-js';
import { IContext } from '../interfaces';

export const createContext = async (req: Request, res: Response): Promise<IContext> => {
	const token = req.session.token;
	let auth: IAuth | undefined = undefined;
	if (token) {
		auth = jwtDecode(token);
	}
	return { req, res, token, auth };
}