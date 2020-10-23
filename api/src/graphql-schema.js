import { mergeTypeDefs, mergeResolvers, loadFilesSync } from 'graphql-tools'

const dataSourceTypes = loadFilesSync('./src/schemas/**/typeDefs/*.js')
export const typeDefs = mergeTypeDefs(dataSourceTypes)

const dataSourceResolvers = loadFilesSync('./src/schemas/**/resolvers/*.js')
export const resolvers = mergeResolvers(dataSourceResolvers)
