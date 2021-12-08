import { FC } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:50000/graphql/v1',
    cache: new InMemoryCache(),
});

const WithApollo: FC = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApollo;
