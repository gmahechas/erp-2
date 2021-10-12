import express from 'express';
import { IContext } from '../helpers/context.interface';

export const authMiddleware = async (request: express.Request, response: express.Response): Promise<IContext> => {
	return { request, response, user: { name: 'gmahechas' } }
}