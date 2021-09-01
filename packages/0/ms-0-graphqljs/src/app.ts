import express from 'express';
import graphql from './graphql';

export default async () => {
	const app = express();
	const server = await graphql();
	server.applyMiddleware({ app });
	return app;
};