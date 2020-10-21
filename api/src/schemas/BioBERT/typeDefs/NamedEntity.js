import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  # There are currently 3736 matches where NamedEntity.value = Word.value
  # Cypher: match (n:NamedEntity) match (w:Word) where n.value = w.value return count(n)
  type NamedEntity {
    id: ID! @id
    external_ids: [ID]
    type: String!
    value: String!
    mentionedInAbstracts: [AbstractMentions]
  }
`
