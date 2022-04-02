import { env, session } from '@gmahechas/erp-common-ms-utils-js';

export const initSession = () => session(env['ms-0']!.session!.redis!.url!, {
	name: 'cerp',
	secret: 'aslkdfjoiq12312',
	resave: false,
	saveUninitialized: false,
	cookie: {
		httpOnly: true,
		secure: false,
		maxAge: 1000 * 60 * 60 * 24 * 7,
	}
})