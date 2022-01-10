import jwt from 'jsonwebtoken';
import { IAuth } from '@gmahechas/erp-common';
import { env } from './env';
import { sendError } from '../errors/utils/send-error';
import { TypeErrorMessage } from '../errors/utils/error-type.enum';
import { checkExistsFile, readFileSync } from './node';

export const jwtSign = (
	payload: string | object | SourceBufferEventMap,
	secretOrPrivateKey: jwt.Secret,
	options?: jwt.SignOptions | undefined) => jwt.sign(payload, secretOrPrivateKey, options);

export const jwtVerify = (
	token: string,
	secretOrPrivateKey: jwt.Secret,
	options?: jwt.SignOptions | undefined) => jwt.verify(token, secretOrPrivateKey, options);

export const jwtDecode = (token: string) => {
	const publicKeyPath = env['ms-1']?.auth?.jwt?.publicKey!;
	if (!checkExistsFile(publicKeyPath)) {
		sendError(TypeErrorMessage.CONFIG);
	}
	const publicKey = readFileSync(publicKeyPath);
	return jwtVerify(token, publicKey, { algorithm: 'RS256' }) as IAuth;
};