import { ILocalStorage } from '../interfaces';

export class LocalStorage {

	static bindings: ILocalStorage;

	static init() {
		const ls = localStorage.getItem('lserp');
		if (ls) {
			const data: ILocalStorage = JSON.parse(ls);
			LocalStorage.bindings = data;
		} else {
			const data: ILocalStorage = { lastPath: '/2/dashboard' };
			localStorage.setItem('lserp', JSON.stringify(data));
			LocalStorage.bindings = data;
		}
	}

	static set<K extends keyof ILocalStorage>(key: K, value: ILocalStorage[K]): void {
		localStorage.setItem('lserp', JSON.stringify({ ...LocalStorage.bindings, ...{ [`${key}`]: value } }));
		LocalStorage.bindings[key] = value;
	}

	static get<K extends keyof ILocalStorage>(key: K): typeof LocalStorage.bindings[K] {
		return LocalStorage.bindings[key];
	}
}