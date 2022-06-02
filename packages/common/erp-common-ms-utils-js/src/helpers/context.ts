import { IContext } from '../interfaces/context.interface';

export class Context {
	static bindings: Partial<IContext> = { token: undefined, auth: undefined, requestId: undefined };

	static set<K extends keyof IContext>(key: K, value: IContext[K]): void {
		Context.bindings[key] = value;
	}

	static get<K extends keyof IContext>(key: K): NonNullable<typeof Context.bindings[K]>{
		return Context.bindings[key] as NonNullable<typeof Context.bindings[K]>;
	}

	static clear(): void {
		Context.bindings = { token: undefined, auth: undefined, requestId: undefined };
	}
}