import express from 'express';
import 'express-async-errors';

import { json } from 'body-parser';
import { middlewares, errorMiddleware } from '@gmahechas/erp-common-expressjs';
import routes from './routes';

const app = express();

app.use(json());
app.use(middlewares);
app.use(routes);
app.use(errorMiddleware);

export default app;