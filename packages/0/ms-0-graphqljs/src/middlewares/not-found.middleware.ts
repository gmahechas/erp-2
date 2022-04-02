import { express } from '@gmahechas/erp-common-graphqljs';

export const notFoundMiddleware = (request: express.Request, response: express.Response) => response.status(404).send('url paila not found').end()