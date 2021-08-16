export const validatorLambda: any = (valid: any, body: object) => {
	if (!valid(body)) {
		console.log(valid.errors);
		throw Error('error la cago')
	}
};
