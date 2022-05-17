import { GraphQLSchema } from 'graphql';
import { authenticationDirective } from './authentication.directive';
import { authorizationDirective } from './authorization.directive';

export * from './authentication.directive';	
export * from './authorization.directive';	

export const applyDirectives = (schema: GraphQLSchema) => {
	schema = authorizationDirective(schema, 'authorization');
	schema = authenticationDirective(schema, 'authentication');
	return schema;
};