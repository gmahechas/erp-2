import { express, json, notFoundMiddleware, errorMiddleware } from '@gmahechas/erp-common-expressjs';
import routes from './routes';

const app = express();
app.use(json());
app.use(routes);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;