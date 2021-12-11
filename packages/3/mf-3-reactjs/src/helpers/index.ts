import { initGraphqlClients } from './graphql'

export const initHelpers = async () => {
	await initGraphqlClients();
}