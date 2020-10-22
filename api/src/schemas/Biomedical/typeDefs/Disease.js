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
    isA: [DiseaseIsA]
    associatatesDaG: [AssociatesDaG]
    localizesDla: [LocalizesDla]
  }

  type DiseaseIsA @relation(name: "IS_A", from: "isDisease", to: "disease") {
    isDisease: Disease!
    position: Int!
    disease: Disease!
  }

  type AssociatesDaG @relation(name: "ASSOCIATES_DaG", from: "disease", to: "gene") {
    disease: Disease!
    high_confidence: Int!
    locus: Int!
    primary: Int!
    status: String!
    gene: Gene!
  }

  type LocalizesDla @relation(name: "LOCALIZES_DlA", from: "disease", to: "anatomy") {
    disease: Disease!
    cooccurrence: Int!
    expected: Float!
    p_fisher: Float!
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
