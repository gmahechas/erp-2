export interface ICreatePolicy {
	policyName: string;
	service: string;
	actions: string[];
}

export interface IUpdatePolicy {
	id: string;
	policyName: string;
	service: string;
	actions: string[];
}

export interface IDeletePolicy {
	id: string;
}

export interface ISearchPolicy {
	id: string;
	policyName: string;
	service: string;
	actions: string[];
}