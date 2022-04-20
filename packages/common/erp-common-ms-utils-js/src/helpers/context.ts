import { IContext } from '../interfaces/context.interface';

export class Context {
	static bindings: IContext = { token: null, auth: undefined };

	static set<K extends keyof IContext>(key: K, value: IContext[K]): void {
		Context.bindings[key] = value;
	}

	static get<K extends keyof IContext>(key: K): typeof Context.bindings[K] {
		return Context.bindings[key];
	}
}