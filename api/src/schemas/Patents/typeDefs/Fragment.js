import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type FromPatentDescription implements Fragment {
    text: String! @id
    kind: String!
    sequence: Int!
    patentDescriptions: [PatentDescription] @relation(name: "HAS_FRAGMENT", direction: IN)
    next: FromPatentDescription @relation(name: "NEXT", direction: OUT)
    geneSymbols: [PatentDescriptionMentionsGeneSymbol]
  }

  type PatentDescriptionMentionsGeneSymbol @relation(name: "MENTIONS", from: "description", to: "symbol") {
    description: FromPatentDescription!
    score: Float!
    symbol: GeneSymbol!
  }

  type FromPatentTitle implements Fragment {
    text: String! @id
    kind: String!
    sequence: Int!
    patentTitles: [PatentTitle] @relation(name: "HAS_FRAGMENT", direction: IN)
    next: FromPatentTitle @relation(name: "NEXT", direction: OUT)
    geneSymbols:  [PatentTitleMentionsGeneSymbol]
  }

  type PatentTitleMentionsGeneSymbol @relation(name: "MENTIONS", from: "title", to: "symbol") {
    title: FromPatentTitle!
    score: Float!
    symbol: GeneSymbol!
  }

  type FromPatentAbstract implements Fragment {
    text: String! @id
    sequence: Int!
    kind: String!
    patentAbstracts: [PatentAbstract] @relation(name: "HAS_FRAGMENT", direction: IN)
    next: FromPatentAbstract @relation(name: "NEXT", direction: OUT)
    geneSymbols: [PatentAbstractMentionsGeneSymbol]
  }

  type PatentAbstractMentionsGeneSymbol @relation(name: "MENTIONS", from: "abstract", to: "symbol") {
    abstract: FromPatentAbstract!
    score: Float!
    symbol: GeneSymbol!
  }

  type FromPatentClaim implements Fragment {
    text: String! @id
    sequence: Int!
    kind: String!
    patentClaims: [PatentClaim] @relation(name: "HAS_FRAGMENT", direction: IN)
    next: FromPatentClaim @relation(name: "NEXT", direction: OUT)
    geneSymbols: [PatentClaimMentionsGeneSymbol]
  }
  
  type PatentClaimMentionsGeneSymbol @relation(name: "MENTIONS", from: "claim", to: "symbol") {
    claim: FromPatentClaim!
    score: Float!
    symbol: GeneSymbol!
  }
`