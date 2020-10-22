import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

// See https://grandstack.io/docs/graphql-interface-union-types 
// for documentation on querying Interface types and Object types
// implementing them.

export const typeDefs = gql`
  # The current design is such that every implementing node Object type has 
  # a .geneSymbols property witha dedicated @relation type that goes out to
  # GeneSymbol. Generalization of this field may be possible, by adding
  # .geneSymbols to this interface type and changing all @relation types
  # to come .from Fragment rather than each being type-specific.

  # Current metrics:
  # 14554 = match (f:Fragment) match (w:Word) where f.text = w.value return count(f)
  # 355105 = match (f:Fragment) match (n:NamedEntity) where f.text = n.value return count(f)
  # 9579 = match (f:Fragment) match (k:Keyword) where f.text = k.word return count(f)
  # 20 = match (f:Fragment) match (g:GOTerm) where f.text = g.name return count(f) 

  # See: ../Patents/typeDefs/Fragment.js and ../Papers/typeDefs/Fragment.js
  # for node Object types that implement this Interface type.
  interface Fragment {
    text: String!
    sequence: Int!
    kind: String!
  }
`
