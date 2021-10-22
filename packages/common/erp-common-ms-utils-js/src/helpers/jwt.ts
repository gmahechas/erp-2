
import jwt from 'jsonwebtoken';

export const jwtSign = (
	payload: string | object | SourceBufferEventMap,
	secretOrPrivateKey: jwt.Secret,
	options?: jwt.SignOptions | undefined) => jwt.sign(payload, secretOrPrivateKey, options);

export const jwtVerify = (
	token: string,
	secretOrPrivateKey: jwt.Secret) => jwt.verify(token, secretOrPrivateKey)