export interface IResponse {
	statusCode: number;
	body: {
		data: any;
		error: any;
	};
}

export const iresponse = (statusCode: number, data: object | string | null = null, error: object | string | null = null): IResponse => ({ statusCode, body: { data, error } });