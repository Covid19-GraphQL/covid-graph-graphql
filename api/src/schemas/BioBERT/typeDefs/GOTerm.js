import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`  
  # Current metrics:
  # 7 = match (g:GOTerm) match (k:Keyword) where g.name = k.word return count(g)
  # 67 = match (g:GOTerm) match (n:NamedEntity) where g.name = n.value return count(g)
  # 213 = match (g:GOTerm) match (w:Word) where g.name = w.value return count(g)

  # Used by Protein
  type GOTerm {
    sid: String!
    name: String!
    namespace: String!
    obsolete: Boolean!
    subsets: [String]!
    associations: [Association]
    is: [IsA]
  }

  type IsA @relation(from: "subTerm", to: "term") {
    subTerm: GOTerm!
    source: String!
    term: GOTerm!
  }
`
