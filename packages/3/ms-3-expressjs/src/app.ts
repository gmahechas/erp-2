import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import dotenv from 'dotenv';

import { notFoundMiddleware, errorMiddleware } from '@gmahechas/erp-common-expressjs';
import routes from './routes';

dotenv.config();

const app = express();
app.use(json());
app.use(routes);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;