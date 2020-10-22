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

  type Synonym @relation(name: "SYNONYM", from: "synonymOf", to: "synonym") {
    synonymOf: GeneSymbol
    source: String!
    synonym: GeneSymbol
  }

  type SynonymSpecialCharOmitted @relation(name: "SYNONYM", from: "synonymOf", to: "synonym") {
    synonymOf: OmitSpecialChar
    source: String!
    synonym: GeneSymbol
  }

  type OmitSpecialChar {
    sid: String!
    status: String
    taxid: String!
    synonyms: [Synonym]
  }

  type SynonymLengthOmitted @relation(name: "SYNONYM", from: "synonymOf", to: "synonym") {
    synonymOf: OmitLength
    source: String!
    synonym: GeneSymbol
  }

  type OmitLength {
    sid: String!
    status: String!
    taxid: String!
    synonyms: [Synonym]
  }

  type SynonymWordOmitted @relation(name: "SYNONYM", from: "synonymOf", to: "synonym") {
    synonymOf: OmitWord
    source: String!
    synonym: GeneSymbol
  }

  type OmitWord {
    sid: String!
    status: String
    taxid: String!
    synonyms: [Synonym]
    synonymsWordOmitted: [SynonymWordOmitted]
  }
`
