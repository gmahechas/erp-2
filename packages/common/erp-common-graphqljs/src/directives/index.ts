import { GraphQLSchema } from 'graphql';
import { authenticationDirective } from './authentication.directive';
import { authorizationDirective } from './authorization.directive';
import { loggerDirective } from './logger.directive';

export * from './authentication.directive';
export * from './authorization.directive';
export * from './logger.directive';

export const applyDirectives = (schema: GraphQLSchema) => {
  schema = loggerDirective(schema, 'logger');
  schema = authorizationDirective(schema, 'authorization');
  schema = authenticationDirective(schema, 'authentication');
  return schema;
};
