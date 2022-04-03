import jwt from 'jsonwebtoken';
import { IAuth } from '@gmahechas/erp-common';
import { env } from './env';
import { sendError } from '../errors/utils/send-error';
import { TypeErrorMessage } from '../errors/utils/error-type.enum';
import { envKeysType } from '../interfaces';

export const jwtSign = (
	payload: string | object | SourceBufferEventMap,
	secretOrPrivateKey: jwt.Secret,
	options?: jwt.SignOptions | undefined) => jwt.sign(payload, secretOrPrivateKey, options);

export const jwtVerify = (
	token: string,
	secretOrPublicKey: jwt.Secret,
	options?: jwt.SignOptions | undefined) => jwt.verify(token, secretOrPublicKey, options);

export const jwtDecode = (token: string) => {
	const appName = process.env.APP_NAME as envKeysType;
	if(!appName) {
		sendError(TypeErrorMessage.CONFIG);
	}
	const publicKey = env[appName]!.auth!.jwt!.publicKey!;
	if (!publicKey) {
		sendError(TypeErrorMessage.CONFIG);
	}
	return jwtVerify(token, publicKey, { algorithm: 'RS256' }) as IAuth;
};