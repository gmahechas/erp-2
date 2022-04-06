import { helmet, cors } from '@gmahechas/erp-common-ms-utils-js';
import { express, json, notFoundMiddleware, errorMiddleware } from '@gmahechas/erp-common-expressjs';
import { routes } from './routes';

const app = express();
app.use(helmet());
app.use(cors());
app.use(json());
app.use(routes);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export { app };