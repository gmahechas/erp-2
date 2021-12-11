import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { env } from '@mf-1/environments';

export let graphqlClientV1: ApolloClient<NormalizedCacheObject>;

export class GraphQLClient {
	protected _client: ApolloClient<NormalizedCacheObject>;
	get client() {
		return this._client;
	}
	constructor(uri: string) {
		this._client = new ApolloClient({
			uri,
			cache: new InMemoryCache({
				addTypename: false,
			})
		})
	}
}


export const initGraphqlClients = async () => {
	graphqlClientV1 = new GraphQLClient(env.graphqlApiUrlV1).client;
}