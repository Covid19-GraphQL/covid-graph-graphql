import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type AgeGroup {
    group: String! @id
    span: String!
    start: Int!
    total: [CurrentTotal]
    male: [CurrentMale]
    female: [CurrentFemale]
  }

  type CurrentTotal @relation(from: "country", to: "ageGroup") {
    country: Country!
    count: Int!
    ageGroup: AgeGroup!
  }

  type CurrentMale @relation(from: "country", to: "ageGroup") {
    country: Country!
    count: Int!
    ageGroup: AgeGroup!
  }

  type CurrentFemale @relation(from: "country", to: "ageGroup") {
    country: Country!
    count: Int!
    ageGroup: AgeGroup!
  }
`

