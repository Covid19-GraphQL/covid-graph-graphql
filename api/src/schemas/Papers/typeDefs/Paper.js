import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type Paper {
    _hash_id: ID! @id
    cord19fulltext_hash: String
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
    from: AuthorCollection!
    position: Int!
    to: Author!
  }

  type Author {
    _hash_id: ID! @id
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
    _hash_id: ID! @id
    institution: String!
    laboratory: String!
    authors: [Author] @relation(name: "AUTHOR_HAS_AFFILIATION", direction: IN)
    affiliation_has_location: [Location] @relation(name: "AFFILIATION_HAS_LOCATION", direction: OUT)
  }

  type Location {
    _hash_id: ID! @id
    addrLine: String
    country: String
    postBox: String
    postCode: String
    region: String
    settlement: String
    affiliations: [Affiliation] @relation(name: "AFFILIATION_HAS_LOCATION", direction: IN)
  }

  type HasPaperId @relation(name: "PAPER_HAS_PAPERID", from: "paper", to: "id") {
    from: Paper!
    position: Int!
    to: PaperID!
  }

  type PaperID {
    id: ID! @id
    type: String!
    papers: [Paper] @relation(name: "PAPER_HAS_PAPERID", direction: IN)
    references: [Reference] @relation(name: "REFERENCE_HAS_PAPERID", direction: IN)
  }

  type Reference {
    _hash_id: ID! @id
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
    from: ReferenceCollection!
    position: Int!
    to: Reference!
  }

  type ReferenceHasPaperid @relation {
    from: Reference!
    position: Int!
    to: PaperID!
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
    _hash_id: ID! @id
    section: String
    text: String!
    fragments: [FromAbstract] @relation(name: "HAS_FRAGMENT", direction: OUT)
    collections: [HasAbstract]
    mentions: [AbstractMentions]
    citation: [AbstractHasCitation]
  }

  type AbstractMentions @relation(name: "MENTIONS", from: "abstract", to: "namedEntity") {
    abstract: Abstract!
    count: Int!
    namedEntity: NamedEntity!
  }

  type AbstractHasCitation @relation(from: "abstract", to: "citation") {
    from: Abstract!
    position: Int!
    to: Citation!
  }

  type Citation {
    _hash_id: ID! @id
    end: Int!
    mention: String
    start: Int!
    text: String
    bodyTexts: [BodyText] @relation(name: "BODYTEXT_HAS_CITATION", direction: IN)
    abstracts: [Abstract] @relation(name: "ABSTRACT_HAS_CITATION", direction: IN)
    references: [Reference] @relation(name: "CITATION_HAS_REFERENCE", direction: OUT)
  }

  type BodyText {
    _hash_id: ID! @id
    section: String!
    text: String!
    bodyTextCollections: [BodyTextCollection] @relation(name: "BODYTEXTCOLLECTION_HAS_BODYTEXT", direction: IN)
    fragments: [FromBodyText] @relation(name: "HAS_FRAGMENT", direction: OUT)
    citations: [HasCitation]
  }

  type HasCitation @relation(name: "BODYTEXT_HAS_CITATION", from: "bodytext", to: "citation") {
    from: BodyText!
    position: Int!
    to: Citation!
  }

  type BodyTextCollection {
    id: ID! @id
    papers: [Paper] @relation(name: "PAPER_HAS_BODYTEXTCOLLECTION", direction: IN)
    bodyText: [HasBodyText]
  }

  type HasBodyText @relation(name: "BODYTEXTCOLLECTION_HAS_BODYTEXT", from: "collection", to: "bodytext") {
    from: BodyTextCollection!
    position: Int!
    to: BodyText!
  }
`