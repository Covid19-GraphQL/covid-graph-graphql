import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type GeneSymbol {
    sid: String!
    status: String
    taxid: String!
    synonyms: [Synonym]
    synonymsSpecialCharOmitted: [SynonymSpecialCharOmitted]
    synonymsLengthOmitted: [SynonymLengthOmitted]
    synonymsWordOmitted: [SynonymWordOmitted]
    mentionedInFragments: [Fragment]
    # Mentioned in Papers
    mentionedInBodyTextFragments: [FromBodyTextMentions]
    mentionedInAbstractFragments: [FromAbstractMentions]
    # Mentioned in Patents
    mentionedInPatentDescriptions: [PatentDescriptionMentionsGeneSymbol]
    mentionedInPatentTitles: [PatentTitleMentionsGeneSymbol]
    mentionedInPatentAbstracts: [PatentAbstractMentionsGeneSymbol]
    mentionedInPatentClaims: [PatentClaimMentionsGeneSymbol]
  }

  type Synonym @relation(from: "geneSymbol", to: "synonym") {
    geneSymbol: GeneSymbol
    source: String!
    synonym: GeneSymbol
  }

  type SynonymSpecialCharOmitted @relation(from: "geneSymbol", to: "synonym") {
    geneSymbol: GeneSymbol
    source: String!
    synonym: OmitSpecialChar
  }

  type OmitSpecialChar {
    sid: String!
    status: String
    taxid: String!
    synonyms: [Synonym]
  }

  type SynonymLengthOmitted @relation(from: "geneSymbol", to: "synonym") {
    geneSymbol: GeneSymbol
    source: String!
    synonym: OmitLength
  }

  type OmitLength {
    sid: String!
    status: String!
    taxid: String!
    synonyms: [Synonym]
  }

  type SynonymWordOmitted @relation(from: "geneSymbol", to: "synonym") {
    geneSymbol: GeneSymbol
    source: String!
    synonym: OmitWord
  }

  type OmitWord {
    sid: String!
    status: String
    taxid: String!
    synonyms: [Synonym]
    synonymsWordOmitted: [SynonymWordOmitted]
  }
  
`
