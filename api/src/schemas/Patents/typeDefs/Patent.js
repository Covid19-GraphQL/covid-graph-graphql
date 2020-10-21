import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type Patent {
    filing_key: ID! @id
    filing_date: Date
    jurisdiction: String!
    lens_id: ID!
    lens_url: String!
    pub_date: Date
    pub_key: ID!
    type: String!
    lensId: [LensID] @relation(name: "PATENT_HAS_LENSID", direction: OUT)
    number: [PatentNumber] @relation(name: "PATENT_HAS_PATENTNUMBER", direction: OUT)
    classifications: [PatentClassificationCollection] @relation(name: "PATENT_HAS_PATENTCLASSIFICATIONCOLLECTION", direction: OUT)
    citations: [PatentCitationCollection] @relation(name: "PATENT_HAS_PATENTCITATIONCOLLECTION", direction: OUT)
    abstracts: [HasPatentAbstract]
    inventors: [Inventor]
    applicants: [Applicant]
    titles: [HasPatentTitle]
    descriptions: [HasPatentDescription]
    claims: [HasPatentClaim]
    owner: [Owner]
  }

  type LensID {
    id: ID! @id
    patents: [Patent] @relation(name: "PATENT_HAS_LENSID", direction: IN)
    familys: [PatentFamily] @relation(name: "PATENTFAMILY_HAS_LENSID", direction: IN)
  }

  type PatentFamily {
    family_id: Int! @id
    size: Int!
    type: String!
    lensId: [HasLensId]
  }

  type HasLensId @relation(name: "PATENTFAMILY_HAS_LENSID", from: "patentFamily", to: "id") {
    from: PatentFamily!
    position: Int!
    to: LensID!
  }

  type PatentNumber {
    pub_key: ID! @id
    patents: [Patent] @relation(name: "PATENT_HAS_PATENTNUMBER", direction: IN)
    citations: [PatentLiteratureCitation] @relation(name: "PATENTLITERATURECITATION_HAS_PATENTNUMBER", direction: IN)
  }

  type PatentLiteratureCitation {
    _hash_id: ID! @id
    lens_id: ID
    pub_key: ID!
    citations: [PatentCitationCollection] @relation(name: "PATENTCITATIONCOLLECTION_HAS_PATENTLITERATURECITATION", direction: IN)
    number: [PatentNumber] @relation(name: "PATENTLITERATURECITATION_HAS_PATENTNUMBER", direction: OUT)
  }

  type PatentCitationCollection {
    id: ID! @id
    patents: [Patent] @relation(name: "PATENT_HAS_PATENTCITATIONCOLLECTION", direction: IN)
    patentLiteratureCitations: [HasPatentLiteratureCitation]
    nonPatentLiteratureCitations: [HasNonPatentLiteratureCitation]
  }

  type HasPatentLiteratureCitation @relation(
    name: "PATENTCITATIONCOLLECTION_HAS_PATENTLITERATURECITATION", 
    from: "collection", 
    to: "citation"
  ) {
    from: PatentCitationCollection!
    position: Int!
    to: PatentLiteratureCitation!
  }

  type HasNonPatentLiteratureCitation @relation(
    name: "PATENTCITATIONCOLLECTION_HAS_NONPATENTLITERATURECITATION", 
    from: "collection", 
    to: "citation"
  ) {
    from: PatentCitationCollection!
    position: Int!
    to: NonPatentLiteratureCitation!
  }

  type NonPatentLiteratureCitation {
    _hash_id: ID! @id
    cit_text: String!
    patentCitationCollections: [PatentCitationCollection] @relation(name: "PATENTCITATIONCOLLECTION_HAS_NONPATENTLITERATURECITATION", direction: IN)
  }

  type PatentClassificationCollection {
    id: ID! @id
    patents: [Patent] @relation(name: "PATENT_HAS_PATENTCLASSIFICATIONCOLLECTION", direction: IN)
    cooperativePatentClassification: [HasCooperativePatentClassification]
    internationalPatentClassification: [HasInternationalPatentClassification]
    usPatentClassification: [HasUSPatentClassification]
  }

  type HasCooperativePatentClassification @relation(
    name: "PATENTCLASSIFICATIONCOLLECTION_HAS_COOPERATIVEPATENTCLASSIFICATION", 
    from: "collection", 
    to: "classification"
  ) {
    from: PatentClassificationCollection!
    position: Int!
    to: CooperativePatentClassification!
  }

  type CooperativePatentClassification {
    classification_cpc: String!
    patentClassificationCollections: [PatentClassificationCollection] @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_COOPERATIVEPATENTCLASSIFICATION", direction: IN)
  }

  type HasInternationalPatentClassification @relation(
    name: "PATENTCLASSIFICATIONCOLLECTION_HAS_INTERNATIONALPATENTCLASSIFICATION", 
    from: "collection", 
    to: "classification"
  ) {
    from: PatentClassificationCollection!
    position: Int!
    to: InternationalPatentClassification!
  }

  type InternationalPatentClassification {
    classification_ipc: String!
    patentClassificationCollections: [PatentClassificationCollection] @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_INTERNATIONALPATENTCLASSIFICATION", direction: IN)
  }

  type HasUSPatentClassification @relation(
    name: "PATENTCLASSIFICATIONCOLLECTION_HAS_USPATENTCLASSIFICATION", 
    from: "collection", 
    to: "classification"
  ) {
    from: PatentClassificationCollection!
    position: Int!
    to: USPatentClassification!
  }

  type USPatentClassification {
    classification_us: String!
    patentClassificationCollections: [PatentClassificationCollection] @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_USPATENTCLASSIFICATION", direction: IN)
  }

  type HasPatentAbstract @relation(
      name: "PATENT_HAS_PATENTABSTRACT", 
      from: "patent", 
      to: "abstract"
    ) {
    from: Patent!
    position: Int!
    to: PatentAbstract!
  }

  type PatentAbstract {
    _hash_id: ID! @id
    lang: String!
    text: String!
    patents: [Patent] @relation(name: "PATENT_HAS_PATENTABSTRACT", direction: IN)
    fragments: [FromPatentAbstract] @relation(name: "HAS_FRAGMENT", direction: OUT)
  }

  type Inventor @relation(from: "patent", to: "entity") {
    from: Patent!
    position: Int!
    to: Entity!
  }

  type Entity {
    name: String! @id
    patentsInventor: [Patent] @relation(name: "INVENTOR", direction: IN)
    patentsApplicant: [Patent] @relation(name: "APPLICANT", direction: IN)
    patentsOwner: [Patent] @relation(name: "OWNER", direction: IN)
  }

  type Applicant @relation(from: "patent", to: "entity") {
    from: Patent!
    position: Int!
    to: Entity!
  }

  type HasPatentTitle @relation(name: "PATENT_HAS_PATENTTITLE", from: "patent", to: "title") {
    from: Patent!
    position: Int!
    to: PatentTitle!
  }

  type PatentTitle {
    _hash_id: ID! @id
    lang: String!
    text: String!
    patents: [Patent] @relation(name: "PATENT_HAS_PATENTTITLE", direction: IN)
    fragments: [FromPatentTitle] @relation(name: "HAS_FRAGMENT", direction: OUT)
  }

  type HasPatentClaim @relation(name: "PATENT_HAS_PATENTCLAIM", from: "patent", to: "claim") {
    from: Patent!
    position: Int!
    to: PatentClaim!
  }

  type PatentClaim {
    _hash_id: ID! @id
    lang: String!
    text: String!
    patents: [Patent] @relation(name: "PATENT_HAS_PATENTCLAIM", direction: IN)
    fragments: [FromPatentClaim] @relation(name: "HAS_FRAGMENT", direction: OUT)
  }

  type HasPatentDescription @relation(name: "PATENT_HAS_PATENTDESCRIPTION", from: "patent", to: "description") {
    from: Patent!
    position: Int!
    to: PatentDescription!
  }

  type PatentDescription {
    _hash_id: ID! @id
    lang: String!
    text: String!
    patents: [Patent] @relation(name: "PATENT_HAS_PATENTDESCRIPTION", direction: IN)
    fragments: [FromPatentDescription] @relation(name: "HAS_FRAGMENT", direction: OUT)
  }

  type Owner @relation(from: "patent", to: "entity") {
    from: Patent!
    position: Int!
    to: Entity!
  }
`
