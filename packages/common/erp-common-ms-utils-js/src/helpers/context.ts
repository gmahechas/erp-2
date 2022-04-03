export class Context {
	static bindings = new Map();

	static set(key: string, value: any): void {
		Context.bindings.set(key, value);
	}

	static get(key: string): any {
		return Context.bindings.get(key);
	}
}