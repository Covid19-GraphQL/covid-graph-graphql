import {
  mergeTypeDefs,
  mergeResolvers,
  loadFilesSync
} from 'graphql-tools';
import path from 'path';

const dataSourceTypes = loadFilesSync(path.join(__dirname, './**/typeDefs/*.js'));
export const typeDefs = mergeTypeDefs(dataSourceTypes);

const dataSourceResolvers = loadFilesSync(path.join(__dirname, './**/resolvers/*.js'));
export const resolvers = mergeResolvers(dataSourceResolvers);
