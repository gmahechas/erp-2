import { ApolloClient, InMemoryCache, NormalizedCacheObject, createHttpLink } from '@apollo/client';
import { env } from '@mf-3/environments';

export let graphqlClientV1: ApolloClient<NormalizedCacheObject>;

export class GraphQLClient {
	protected _client: ApolloClient<NormalizedCacheObject>;
	get client() {
		return this._client;
	}
	constructor(uri: string) {
		this._client = new ApolloClient({
			cache: new InMemoryCache({
				addTypename: false,
			}),
			link: createHttpLink({
				uri,
				credentials: 'include'
			})
		})
	}
}


export const initGraphqlClients = async () => {
	graphqlClientV1 = new GraphQLClient(env.graphqlApiUrlV1).client;
}