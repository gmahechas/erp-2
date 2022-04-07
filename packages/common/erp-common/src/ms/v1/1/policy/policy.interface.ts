export interface IPolicy {
	id: string;
	policyName: string;
	services: Array<serviceType>;
	actions: Array<actionType>;
	companyId: string;
}

export type serviceType = 'country' | 'estate' | 'city';
export type actionType = 'create' | 'read' | 'update' | 'delete' | '*';