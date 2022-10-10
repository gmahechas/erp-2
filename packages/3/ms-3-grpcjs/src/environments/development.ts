import { IConfig } from '@gmahechas/erp-common-ms-utils-js';

export const config: IConfig = {
  environment: 'development',
  app: {
    port: process.env.APP_PORT,
  },
  ms: {
    three: {
      databases: {
        mongo: {
          uri: process.env.MS_THREE_DATABASES_MONGO_URI,
        },
      },
    },
  },
};
