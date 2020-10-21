import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type Disease {
    _id: ID! @id
    definition: String
    doid: String!
    license: String
    link: String
    name: String
    source: String
    associatatesDaG: [AssociatesDaG]
    localizesDla: [LocalizesDla]
  }

  type AssociatesDaG @relation(name: "ASSOCIATES_DaG", from: "disease", to: "gene") {
    disease: Disease!
    highConfidence: Int!
    locus: Int!
    primary: Int!
    status: String!
    gene: Gene!
  }

  type LocalizesDla @relation(name: "LOCALIZES_DlA", from: "disease", to: "anatomy") {
    disease: Disease!
    cooccurrence: Int!
    expected: Float!
    pFisher: Float!
    anatomy: Anatomy!
  }

  type Anatomy {
    _id: ID! @id
    bto_id: ID
    mesh_id: ID!
    mesh_name: String!
    name: String!
    uberon_id: ID!
    diseases: [LocalizesDla]
  }
`
