import express from 'express';

export interface IContext {
	req: express.Request;
	res: express.Response;
	token?: string;
}