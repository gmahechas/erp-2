import express from 'express';
import { IAuth } from '@gmahechas/erp-common';

export interface IContext {
	req: express.Request;
	res: express.Response;
	token?: string;
	auth?: IAuth;
}