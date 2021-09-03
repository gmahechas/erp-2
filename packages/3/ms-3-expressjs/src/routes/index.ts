import express from 'express';
import countryRouter from './country.routes';
import estateRouter from './estate.routes';

const router = express.Router();

export default [
	router.use('/country', countryRouter),
	router.use('/estate', estateRouter)
]