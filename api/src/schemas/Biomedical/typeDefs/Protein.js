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
    term: GOTerm!
  }

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

  type MapsProtein @relation(name: "MAPS", from: "mappedBy", to: "protein") {
    mappedBy: Protein!
    source: String!
    taxid: String
    protein: Protein!
  }
`
