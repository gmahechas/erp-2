export const actionArgs = (fields: string[], event: any) => {
	let args = {};
	for (const field of fields) {
		if (field == 'body') {
			args = { ...args, ...JSON.parse(event[field]) };
		} else {
			args = { ...args, ...event[field] };
		}
	}
	return args;
}