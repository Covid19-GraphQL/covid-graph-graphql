import { print } from 'graphql'
import { typeDefs } from './src/graphql-schema'
import { createWriteStream } from 'fs'

const writeStream = createWriteStream('./src/schema.graphql')
writeStream.write(print(typeDefs))
