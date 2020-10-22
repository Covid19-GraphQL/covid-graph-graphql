import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type Paper {
    _hash_id: ID @id
    cord_uid: ID!
    journal: String
    publish_time: String
    source: String!
    title: String
    url: String
    authorCollection: [AuthorCollection] @relation(name: "PAPER_HAS_AUTHORCOLLECTION", direction: OUT)
    abstractCollection: [AbstractCollection] @relation(name: "PAPER_HAS_ABSTRACTCOLLECTION", direction: OUT)
    referenceCollection: [ReferenceCollection] @relation(name: "PAPER_HAS_REFERENCECOLLECTION", direction: OUT)
    bodyTextCollection: [BodyTextCollection] @relation(name: "PAPER_HAS_BODYTEXTCOLLECTION", direction: OUT)
    paperId: [HasPaperId]
  }

  type AuthorCollection {
    id: ID! @id
    papers: [Paper] @relation(name: "PAPER_HAS_AUTHORCOLLECTION", direction: IN)
    authors: [HasAuthor]
  }

  type HasAuthor @relation(name: "AUTHORCOLLECTION_HAS_AUTHOR", from: "collection", to: "author") {
    collection: AuthorCollection!
    position: Int!
    author: Author!
  }

  type Author {
    _hash_id: ID @id
    email: String
    first: String
    fist: String
    last: String
    middle: String
    suffix: String
    collections: [AuthorCollection] @relation(name: "AUTHORCOLLECTION_HAS_AUTHOR", direction: IN)
    affiliation: [Affiliation] @relation(name: "AUTHOR_HAS_AFFILIATION", direction: OUT)
  }

  type Affiliation {
    _hash_id: ID @id
    institution: String!
    laboratory: String!
    authors: [Author] @relation(name: "AUTHOR_HAS_AFFILIATION", direction: IN)
    affiliation_has_location: [Location] @relation(name: "AFFILIATION_HAS_LOCATION", direction: OUT)
  }

  type Location {
    _hash_id: ID @id
    addrLine: String
    country: String
    postBox: String
    postCode: String
    region: String
    settlement: String
    affiliations: [Affiliation] @relation(name: "AFFILIATION_HAS_LOCATION", direction: IN)
  }

  type HasPaperId @relation(name: "PAPER_HAS_PAPERID", from: "paper", to: "id") {
    paper: Paper!
    position: Int!
    id: PaperID!
  }

  type PaperID {
    id: ID! @id
    type: String!
    papers: [Paper] @relation(name: "PAPER_HAS_PAPERID", direction: IN)
    references: [ReferenceHasPaperid]
    hasPublicationId: [PaperID] @relation(name: "HAS_PUBLICATION_ID", direction: "IN")
  }

  type Reference {
    _hash_id: ID @id
    issn: ID
    name: String!
    pages: String
    ref_id: ID
    title: String
    venue: String
    volume: String
    year: Int
    referenceCollections: [ReferenceCollection] @relation(name: "REFERENCECOLLECTION_HAS_REFERENCE", direction: IN)
    citations: [Citation] @relation(name: "CITATION_HAS_REFERENCE", direction: IN)
    paperId: [ReferenceHasPaperid]
  }

  type ReferenceCollection {
    id: ID! @id
    papers: [Paper] @relation(name: "PAPER_HAS_REFERENCECOLLECTION", direction: IN)
    references: [HasReference]
  }

  type HasReference @relation(name: "REFERENCECOLLECTION_HAS_REFERENCE", from: "collection", to: "reference") {
    collection: ReferenceCollection!
    position: Int!
    reference: Reference!
  }

  type ReferenceHasPaperid @relation(name: "REFERENCE_HAS_PAPERID", from: "reference", to: "id") {
    reference: Reference!
    position: Int!
    id: PaperID!
  }
  
  type AbstractCollection {
    id: ID! @id
    papers: [Paper] @relation(name: "PAPER_HAS_ABSTRACTCOLLECTION", direction: IN)
    abstracts: [HasAbstract]
  }

  type HasAbstract @relation(name: "ABSTRACTCOLLECTION_HAS_ABSTRACT", from: "collection", to: "abstract") {
    collection: AbstractCollection!
    position: Int!
    abstract: Abstract!
  }

  type Abstract {
    _hash_id: ID @id
    section: String
    text: String!
    fragments: [FromAbstract] @relation(name: "HAS_FRAGMENT", direction: OUT)
    collections: [HasAbstract]
    citation: [AbstractHasCitation]
    # NamedEntity
    mentions: [AbstractMentions]
  }

  type AbstractMentions @relation(name: "MENTIONS", from: "abstract", to: "namedEntity") {
    abstract: Abstract!
    count: Int!
    namedEntity: NamedEntity!
  }

  type AbstractHasCitation @relation(from: "abstract", to: "citation") {
    abstract: Abstract!
    position: Int!
    citation: Citation!
  }

  type Citation {
    name: String @id
    _hash_id: ID
    end: Int
    mention: String
    start: Int
    text: String
    bodyTexts: [BodyText] @relation(name: "BODYTEXT_HAS_CITATION", direction: IN)
    abstracts: [Abstract] @relation(name: "ABSTRACT_HAS_CITATION", direction: IN)
    references: [Reference] @relation(name: "CITATION_HAS_REFERENCE", direction: OUT)
    isReferenceType: [ReferenceType] @relation(name: "IS_REFERENCE_TYPE", direction: "OUT")
    hasPublicationId: [PaperID] @relation(name: "HAS_PUBLICATION_ID", direction: "OUT")
    # ClinicalTrial
    clinicaltrials: [ClinicalTrial] @relation(name: "REFERS_TO", direction: "IN")
  }

  type BodyText {
    _hash_id: ID @id
    section: String!
    text: String!
    bodyTextCollections: [BodyTextCollection] @relation(name: "BODYTEXTCOLLECTION_HAS_BODYTEXT", direction: IN)
    # Fragment
    fragments: [FromBodyText] @relation(name: "HAS_FRAGMENT", direction: OUT)
    citations: [HasCitation]
  }

  type HasCitation @relation(name: "BODYTEXT_HAS_CITATION", from: "bodyText", to: "citation") {
    bodyText: BodyText!
    position: Int!
    citation: Citation!
  }

  type BodyTextCollection {
    id: ID! @id
    papers: [Paper] @relation(name: "PAPER_HAS_BODYTEXTCOLLECTION", direction: IN)
    bodyTexts: [HasBodyText]
  }

  type HasBodyText @relation(name: "BODYTEXTCOLLECTION_HAS_BODYTEXT", from: "collection", to: "bodyText") {
    collection: BodyTextCollection!
    position: Int!
    bodyText: BodyText!
  }
`