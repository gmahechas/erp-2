import { helmet } from '@gmahechas/erp-common-ms-utils-js';
import { express, notFoundMiddleware } from '@gmahechas/erp-common-graphqljs';
import { initSession } from '@gmahechas/erp-common-ms-0-js';
import { graphqlV1 } from './graphql';

export const bootstrap = async () => {
  const app = express();
  app.set('trust proxy', true);
  app.disable('x-powered-by');
  app.use(helmet());
  app.use(await initSession());
  const serverV1 = await graphqlV1();
  serverV1.applyMiddleware({
    app,
    path: '/graphql/v1',
    cors: {
      origin: 'http://localhost:8000',
      credentials: true,
    },
  });
  app.use(notFoundMiddleware);
  return app;
};
