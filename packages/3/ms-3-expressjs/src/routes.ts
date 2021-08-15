import express from 'express';
import countryRouter from './routes/country.routes';
import estateRouter from './routes/estate.routes';

const router = express.Router();

export default [
	router.use('/country', countryRouter),
	router.use('/estate', estateRouter)
]