import { Request, Response } from 'express';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';
import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { Context, Winston } from '@gmahechas/erp-common-ms-utils-js';

export const loggerDirective = (schema: GraphQLSchema, directiveName: string) =>
  mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const loggerDirective = getDirective(
        schema,
        fieldConfig,
        directiveName,
      )?.[0];
      if (loggerDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = async (
          source,
          args,
          context: { req: Request; res: Response },
          info,
        ) => {
          const auth = Context.get('auth');
          const {
            req: { method, ip },
          } = context;
          const { fieldName } = info;

          Winston.logger.info('logger', {
            requestId: Context.get('requestId'),
            auth: JSON.stringify(auth),
            action: fieldName,
            method,
            payload: JSON.stringify(args),
            sourceIp: ip,
          });
          return await resolve(source, args, context, info);
        };
        return fieldConfig;
      }
    },
  });
