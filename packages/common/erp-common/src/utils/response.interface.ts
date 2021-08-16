export interface IResponse {
	statusCode: number;
	body: any;
	error: any;
}

export const iresponse = (statusCode: number, body: object | null = null, error: object | string | null = null): IResponse => ({ statusCode, body, error });