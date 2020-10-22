import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  # Current metrics:
  # 241 = match (k:Keyword) match (n:NamedEntity) where k.word = n.value return count(k)
  # 254 = match (k:Keyword) match (w:Word) where k.word = w.value return count(k)
  
  # Used by ClinicalTrial.isStudying
  type Keyword {
    word: String! @id
    conditions: [Condition] @relation(name: "HAS_KEYWORD", direction: IN)
  }
`
