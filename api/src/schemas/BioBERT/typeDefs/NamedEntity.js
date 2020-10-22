import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  # Current metrics:
  # 3736 = match (n:NamedEntity) match (w:Word) where n.value = w.value return count(n)

  # Used by Paper.abstractCollection.abstract.mentions.namedEntity
  type NamedEntity {
    id: ID! @id
    external_ids: [ID]
    type: String!
    value: String!
    mentionedInAbstracts: [AbstractMentions]
  }
`
