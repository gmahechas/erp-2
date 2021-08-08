export interface IResponse {
	statusCode: number;
	body: any;
	error: any;
}

export const response = (statusCode: number, body: any, error: object | string = {}): IResponse => ({ statusCode, body, error });