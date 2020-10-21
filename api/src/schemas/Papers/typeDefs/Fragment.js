import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type FromAbstract implements Fragment {
    text: String! @id
    sequence: Int!
    kind: String!
    next: FromAbstract @relation(name: "NEXT", direction: OUT)
    abstracts: [Abstract] @relation(name: "HAS_FRAGMENT", direction: IN)
    mentionsGeneSymbols: [FromAbstractMentions]
  }
  
  type FromAbstractMentions @relation(name: "MENTIONS", from: "fromAbstract", to: "geneSymbol") {
    fromAbstract: FromAbstract!
    score: Float!
    geneSymbol: GeneSymbol!
  }

  type FromBodyText implements Fragment {
    text: String! @id
    sequence: Int!
    kind: String!
    bodyTexts: [BodyText] @relation(name: "HAS_FRAGMENT", direction: IN)
    next: FromBodyText @relation(name: "NEXT", direction: OUT)
    mentionsGeneSymbols: [FromBodyTextMentions]
  }

  type FromBodyTextMentions @relation(name: "MENTIONS", from: "fromBodyText", to: "geneSymbol") {
    fromBodyText: FromBodyText!
    score: Float!
    geneSymbol: GeneSymbol!
  }
`
