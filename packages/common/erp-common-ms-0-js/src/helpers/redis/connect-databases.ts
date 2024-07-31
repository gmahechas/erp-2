import { env, sendError, session, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

export const initSession = (): Promise<any> => {
  const { redis, cookie_name, cookie_secret } = env['ms-0']!.session!;
  if (!redis || !cookie_name || !cookie_secret) {
    sendError(TypeErrorMessage.CONFIG);
  }
  return session(redis!.url!, {
    name: cookie_name,
    secret: cookie_secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  });
};
