import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type Country {
    name: String! @id
    un_id: ID
    cities: [City] @relation(name: "LOCATED_IN", direction: IN)
    provinces: [PartOf]
    total: [CurrentTotal]
    male: [CurrentMale]
    female: [CurrentFemale]
  }

  type City {
    name: String! @id
    country: [Country] @relation(name: "LOCATED_IN", direction: OUT)
    # ClinicalTrial facilities
    facilities: [Facility] @relation(name: "LOCATED_IN", direction: IN)
  }

  type PartOf @relation(from: "province", to: "country") {
    province: Province!
    source: String!
    country: Country!
  }

  type Province {
    name: String! @id
    latitude: String
    longitude: String
    country: [Country] @relation(name: "PART_OF", direction: "OUT")    
    reports: [DailyReported]
    latestReports: [LatestReported]
  }

  type DailyReported @relation(name: "REPORTED", from: "province", to: "report") {
    province: Province!
    source: String!
    report: DailyReport!
  }

  type DailyReport {
    uuid: ID! @id
    date: LocalDateTime!
    confirmed: Int!
    death: String!
    recovered: String!
    province: DailyReported
  }

  type LatestReported @relation(name: "REPORTED", from: "province", to: "report") {
    province: Province!
    source: String!
    report: Latest!
  }

  type Latest {
    uuid: ID! @id
    date: LocalDateTime!
    confirmed: Int!
    death: String!
    recovered: String!
    province: LatestReported
  }

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