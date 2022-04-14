export interface ICreateGroup {
	groupName: string;
	groupPolicies: Array<string>;
}

export interface IUpdateGroup {
	id: string;
	groupName: string;
	groupPolicies: Array<string>;
}

export interface IDeleteGroup {
	id: string;
}

export interface ISearchGroup {
	id: string;
	groupName: string;
}