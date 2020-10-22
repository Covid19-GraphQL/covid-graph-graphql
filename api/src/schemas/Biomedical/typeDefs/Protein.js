import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type Protein {
    sid: String!
    category: String
    desc: String
    length: String
    name: String
    source: String!
    status: String
    taxid: String!
    version: String
    associations: [Association]
    transcripts: [ProteinCodes]
    mapsProteins: [MapsProtein]
  }

  type Association @relation(from: "protein", to: "term") {
    protein: Protein!
    evidence: String!
    qualifier: String
    # BioBERT
    term: GOTerm!
  }

  type MapsProtein @relation(name: "MAPS", from: "mappedBy", to: "protein") {
    mappedBy: Protein!
    source: String!
    taxid: String
    protein: Protein!
  }
`
