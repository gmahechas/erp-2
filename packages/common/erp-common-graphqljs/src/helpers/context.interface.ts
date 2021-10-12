import express from 'express';

export interface IContext {
	request: express.Request;
	response: express.Response;
	user: any;
}