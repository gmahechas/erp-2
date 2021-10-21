import express from 'express';
import { IContext } from '../interfaces/context.interface';

export const authMiddleware = async (req: express.Request, res: express.Response): Promise<IContext> => {
	return { req, res }
}