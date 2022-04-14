export interface ICreateGroup {
	groupName: string;
	policies: Array<string>;
}

export interface IUpdateGroup {
	id: string;
	groupName: string;
	policies: Array<string>;
}

export interface IDeleteGroup {
	id: string;
}

export interface ISearchGroup {
	id: string;
	groupName: string;
}