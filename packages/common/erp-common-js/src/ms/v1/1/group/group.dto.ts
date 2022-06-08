export interface ICreateGroup {
	groupName: string;
	policies: string[];
}

export interface IUpdateGroup {
	id: string;
	groupName: string;
	policies: string[];
}

export interface IDeleteGroup {
	id: string;
}

export interface ISearchGroup {
	id: string;
	groupName: string;
}