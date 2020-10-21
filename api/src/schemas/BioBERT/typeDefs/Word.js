import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`  
  type Word {
    value: String!
    match10: Boolean
    match11: Boolean
    match12: Boolean
    match3: Boolean!
    match4: Boolean
    match5: Boolean
    match6: Boolean
    match7: Boolean
    match8: Boolean
    match9: Boolean
  }
`
