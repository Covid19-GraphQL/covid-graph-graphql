import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

// See https://grandstack.io/docs/graphql-interface-union-types 
// for documentation on querying Interface types and Object types
// implementing them.

export const typeDefs = gql`
  # See: ../Patents/typeDefs/Fragment.js and ../Papers/typeDefs/Fragment.js
  # for node Object types that implement this Interface type.

  # The current design is such that every implementing node Object type has 
  # a .geneSymbols property witha dedicated @relation type that goes out to
  # GeneSymbol. Generalization of this field may be possible, by adding
  # .geneSymbols to this interface type and changing all @relation types
  # to come .from Fragment rather than each being type-specific.

  # There are currently 14554 matches where Fragment.text = Word.value
  # Cypher: match (f:Fragment) match (w:Word) where f.text = w.value return count(f)

  # There are currently 355105 matches where Fragment.text = NamedEntity.value
  # Cypher: match (f:Fragment) match (n:NamedEntity) where f.text = n.value return count(f)
  interface Fragment {
    text: String!
    sequence: Int!
    kind: String!
  }
`
