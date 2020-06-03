import { gql } from "apollo-server";
import { cypher, neo4jgraphql } from "neo4j-graphql-js";

export const typeDefs = gql`

type Query {
  # Generated:
  # DailyReport: [DailyReport]
  # Latest: [Latest]
  DailyReportInterface: [DailyReportInterface] @cypher(${cypher`
    MATCH (dailyReport:DailyReport)
    RETURN dailyReport
  `})
  # Generated:
  # GeneSymbol: [GeneSymbol]
  # OmitSpecialChar: [OmitSpecialChar]
  # OmitLength: [OmitLength]
  # OmitWord: [OmitWord]  
  GeneSymbolInterface: [GeneSymbolInterface] @cypher(${cypher`
    MATCH (geneSymbol:GeneSymbol)
    RETURN geneSymbol
  `})
}

type Country {
  name: String!
  un_id: String
  currentTotal: [AgeGroup] @relation(name: "CURRENT_TOTAL", direction: "OUT")
  currentTotalRelation(first: Int, offset: Int): [CurrentTotal]
  currentMale: [AgeGroup] @relation(name: "CURRENT_MALE", direction: "OUT")
  currentMaleRelation(first: Int, offset: Int): [CurrentMale]
  currentFemale: [AgeGroup] @relation(name: "CURRENT_FEMALE", direction: "OUT")
  currentFemaleRelation(first: Int, offset: Int): [CurrentFemale]
  provinces: [Province] @relation(name: "PART_OF", direction: "IN")
}

type AuthorCollection {
  id: String!
  authors: [Author] @relation(name: "AUTHORCOLLECTION_HAS_AUTHOR", direction: "OUT")
  authorsRelation(first: Int, offset: Int): [AuthorCollectionHasAuthor]
  papers: [Paper] @relation(name: "PAPER_HAS_AUTHORCOLLECTION", direction: "IN")
}

type Author {
  _hash_id: String!
  email: String
  first: String
  fist: String
  last: String
  middle: String
  suffix: String
  affiliation: [Affiliation] @relation(name: "AUTHOR_HAS_AFFILIATION", direction: "OUT")
  collections: [AuthorCollection] @relation(name: "AUTHORCOLLECTION_HAS_AUTHOR", direction: "IN")
}

type Paper {
  _hash_id: String!
  cord19fulltext_hash: String
  cord_uid: String!
  journal: String
  publish_time: String
  source: String!
  title: String
  url: String
  authorCollection: [AuthorCollection] @relation(name: "PAPER_HAS_AUTHORCOLLECTION", direction: "OUT")
  paperId: [PaperID] @relation(name: "PAPER_HAS_PAPERID", direction: "OUT")
  paperIdRelation(first: Int, offset: Int): [PaperHasPaperId]
  abstractCollection: [AbstractCollection] @relation(name: "PAPER_HAS_ABSTRACTCOLLECTION", direction: "OUT")
  referenceCollection: [ReferenceCollection] @relation(name: "PAPER_HAS_REFERENCECOLLECTION", direction: "OUT")
  bodyTextCollection: [BodyTextCollection] @relation(name: "PAPER_HAS_BODYTEXTCOLLECTION", direction: "OUT")
}

type Province {
  name: String!
  latitude: String
  longitude: String
  dailyReports: [DailyReport] @relation(name: "REPORTED", direction: OUT)
  dailyReportsInterface: [DailyReportInterface] @cypher(${cypher`
    MATCH (this)-[reported:REPORTED]->(dailyReport:DailyReport)
    RETURN dailyReport
  `})
  dailyReportsRelation(first: Int, offset: Int): [Reported]
  country: [Country] @relation(name: "PART_OF", direction: "OUT")
  countryRelation(first: Int, offset: Int): [PartOf]
}

type PaperID {
  id: String!
  type: String!
  papers: [Paper] @relation(name: "PAPER_HAS_PAPERID", direction: "IN")
  references: [Reference] @relation(name: "REFERENCE_HAS_PAPERID", direction: "IN")
}

interface DailyReportInterface {
  date: LocalDateTime!
  confirmed: Int!
  death: String!
  recovered: String!
  uuid: String!
}

type DailyReport implements DailyReportInterface {
  date: LocalDateTime!
  confirmed: Int!
  death: String!
  recovered: String!
  uuid: String!
}

type Latest implements DailyReportInterface {
  date: LocalDateTime!
  confirmed: Int!
  death: String!
  recovered: String!
  uuid: String!
}

type AbstractCollection {
  id: String!
  abstract: [Abstract] @relation(name: "ABSTRACTCOLLECTION_HAS_ABSTRACT", direction: "OUT")
  abstractRelation(first: Int, offset: Int): [AbstractCollectionHasAbstract]
  papers: [Paper] @relation(name: "PAPER_HAS_ABSTRACTCOLLECTION", direction: "IN")
}

type Abstract {
  _hash_id: String!
  section: String
  text: String!
  citation: [Citation] @relation(name: "ABSTRACT_HAS_CITATION", direction: "OUT")
  citationRelation(first: Int, offset: Int): [AbstractHasCitation]
  abstractCollections: [AbstractCollection] @relation(name: "ABSTRACTCOLLECTION_HAS_ABSTRACT", direction: "IN")
}

type AgeGroup {
  group: String!
  span: String!
  start: Int!
  countryCurrentTotal: [Country] @relation(name: "CURRENT_TOTAL", direction: "IN")
  countryCurrentMale: [Country] @relation(name: "CURRENT_MALE", direction: "IN")
  countryCurrentFemale: [Country] @relation(name: "CURRENT_FEMALE", direction: "IN")
}

type LoadingLog {
  dockerhub_image_hash: String!
  dockerhub_image_name: String!
  dockerhub_image_tag: String!
  loader: String!
  loading_finished_at: String!
}

type Gene {
  sid: String!
  Feature_type: String
  Full_name_from_nomenclature_authority: String
  GeneID: String
  LocusTag: String
  Modification_date: String
  Nomenclature_status: String
  Other_designations: String
  Symbol: String
  Symbol_from_nomenclature_authority: String
  Synonyms: String
  chromosome: String
  dbXrefs: String
  description: String
  map_location: String
  name: String
  source: String!
  tax_id: String
  taxid: String
  type_of_gene: String
  maps: [Gene] @relation(name: "MAPS", direction: "OUT")
  mapsRelation(first: Int, offset: Int): [Maps]
  codes: [Transcript] @relation(name: "CODES", direction: "OUT")
  codesRelation(first: Int, offset: Int): [Codes]
  expressed: [GtexDetailedTissue] @relation(name: "EXPRESSED", direction: "OUT")
  expressedRelation(first: Int, offset: Int): [Expressed]
  member: [Pathway] @relation(name: "MEMBER", direction: "OUT")
  memberRelation(first: Int, offset: Int): [Member]
}

type Word {
  value: String!
  match10: Boolean
  match11: Boolean
  match12: Boolean
  match3: Boolean!
  match4: Boolean
  match5: Boolean
  match6: Boolean
  match7: Boolean
  match8: Boolean
  match9: Boolean
}

type Transcript {
  sid: String!
  length: String
  source: String!
  status: String
  taxid: String!
  version: String
  genes: [Gene] @relation(name: "CODES", direction: "IN")
}

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
  association: [GOTerm] @relation(name: "ASSOCIATION", direction: "OUT")
  associationRelation(first: Int, offset: Int): [Association]
}

type GOTerm {
  sid: String!
  name: String!
  namespace: String!
  obsolete: Boolean!
  subsets: [String]!
  isA: [GOTerm] @relation(name: "IS_A", direction: "OUT")
  isARelation(first: Int, offset: Int): [IsA]
  proteins: [Protein] @relation(name: "ASSOCIATION", direction: "IN")
}

type GtexSample {
  sid: String!
  SM350NRM: Float!
  SM550NRM: Float!
  SMAFRZE: String!
  SMALTALG: Float!
  SMATSSCR: Float!
  SMBSMMRT: Float!
  SMCENTER: String!
  SMCGLGTH: Float!
  SMCHMPRS: Float!
  SMDPMPRT: Float!
  SME1ANTI: Float!
  SME1MMRT: Float!
  SME1MPRT: Float!
  SME1PCTS: Float!
  SME1SNSE: Float!
  SME2ANTI: Float!
  SME2MMRT: Float!
  SME2MPRT: Float!
  SME2PCTS: Float!
  SME2SNSE: Float!
  SMESTLBS: Float!
  SMEXNCRT: Float!
  SMEXPEFF: Float!
  SMGAPPCT: Float!
  SMGEBTCH: String!
  SMGEBTCHD: String!
  SMGEBTCHT: String!
  SMGNSDTC: Float!
  SMGTC: String!
  SMMAPRT: Float!
  SMMFLGTH: Float!
  SMMNCPB: Float!
  SMMNCV: Float!
  SMMPPD: Float!
  SMMPPDPR: Float!
  SMMPPDUN: Float!
  SMMPUNRT: Float!
  SMNABTCH: String!
  SMNABTCHD: String!
  SMNABTCHT: String!
  SMNTERRT: Float!
  SMNTRART: Float!
  SMNTRNRT: Float!
  SMNUM5CD: Float!
  SMNUMGPS: Float!
  SMPTHNTS: String!
  SMRDLGTH: Float!
  SMRDTTL: Float!
  SMRIN: Float!
  SMRRNANM: Float!
  SMRRNART: Float!
  SMSFLGTH: Float!
  SMSPLTRD: Float!
  SMTRSCPT: Float!
  SMTS: String!
  SMTSD: String!
  SMTSISCH: Float!
  SMTSPAX: Float!
  SMUBRID: String!
  SMUNMPRT: Float!
  SMUNPDRD: Float!
  SMVQCFL: Float!
  measures: [GtexTissue] @relation(name: "MEASURES", direction: "OUT")
}

type GtexTissue {
  name: String!
  parent: [GtexDetailedTissue] @relation(name: "PARENT", direction: "OUT")
  gtexsamples: [GtexSample] @relation(name: "MEASURES", direction: "IN")
}

type GtexDetailedTissue {
  name: String!
  gtextissues: [GtexTissue] @relation(name: "PARENT", direction: "IN")
  genes: [Gene] @relation(name: "EXPRESSED", direction: "IN")
}

type Pathway {
  sid: String!
  name: String!
  org: String!
  source: String!
  taxid: String!
  child: [Pathway] @relation(name: "CHILD", direction: "OUT")
  childRelation(first: Int, offset: Int): [Child]
  genes: [Gene] @relation(name: "MEMBER", direction: "IN")
}

type Patent {
  filing_key: String!
  filing_date: String
  jurisdiction: String!
  lens_id: String!
  lens_url: String!
  pub_date: String
  pub_key: String!
  type: String!
  lensId: [LensID] @relation(name: "PATENT_HAS_LENSID", direction: "OUT")
  patentNumber: [PatentNumber] @relation(name: "PATENT_HAS_PATENTNUMBER", direction: "OUT")
  patentClassificationCollection: [PatentClassificationCollection] @relation(name: "PATENT_HAS_PATENTCLASSIFICATIONCOLLECTION", direction: "OUT")
  patentAbstract: [PatentAbstract] @relation(name: "PATENT_HAS_PATENTABSTRACT", direction: "OUT")
  patentAbstractRelation(first: Int, offset: Int): [PatentHasPatentAbstract]
  inventor: [Entity] @relation(name: "INVENTOR", direction: "OUT")
  inventorRelation(first: Int, offset: Int): [Inventor]
  applicant: [Entity] @relation(name: "APPLICANT", direction: "OUT")
  applicantRelation(first: Int, offset: Int): [Applicant]
  patentTitle: [PatentTitle] @relation(name: "PATENT_HAS_PATENTTITLE", direction: "OUT")
  patentTitleRelation(first: Int, offset: Int): [PatentHasPatentTitle]
  patentCitationCollection: [PatentCitationCollection] @relation(name: "PATENT_HAS_PATENTCITATIONCOLLECTION", direction: "OUT")
  patentDescription: [PatentDescription] @relation(name: "PATENT_HAS_PATENTDESCRIPTION", direction: "OUT")
  patentDescriptionRelation(first: Int, offset: Int): [PatentHasPatentDescription]
  patentClaim: [PatentClaim] @relation(name: "PATENT_HAS_PATENTCLAIM", direction: "OUT")
  patentClaimRelation(first: Int, offset: Int): [PatentHasPatentClaim]
  owner: [Entity] @relation(name: "OWNER", direction: "OUT")
  ownerRelation(first: Int, offset: Int): [Owner]
}

type LensID {
  id: String!
  patents: [Patent] @relation(name: "PATENT_HAS_LENSID", direction: "IN")
  patentFamilys: [PatentFamily] @relation(name: "PATENTFAMILY_HAS_LENSID", direction: "IN")
}

type PatentNumber {
  pub_key: String!
  patents: [Patent] @relation(name: "PATENT_HAS_PATENTNUMBER", direction: "IN")
  patentliteraturecitations: [PatentLiteratureCitation] @relation(name: "PATENTLITERATURECITATION_HAS_PATENTNUMBER", direction: "IN")
}

type PatentClassificationCollection {
  id: String!
  cooperativePatentClassification: [CooperativePatentClassification] @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_COOPERATIVEPATENTCLASSIFICATION", direction: "OUT")
  cooperativePatentClassificationRelation(first: Int, offset: Int): [CooperativePatentClassificationRelation]
  internationalPatentClassification: [InternationalPatentClassification] @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_INTERNATIONALPATENTCLASSIFICATION", direction: "OUT")
  internationalPatentClassificationRelation(first: Int, offset: Int): [InternationalPatentClassificationRelation]
  usPatentClassification: [USPatentClassification] @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_USPATENTCLASSIFICATION", direction: "OUT")
  usPatentClassificationRelation(first: Int, offset: Int): [USPatentClassificationRelation]
  patents: [Patent] @relation(name: "PATENT_HAS_PATENTCLASSIFICATIONCOLLECTION", direction: "IN")
}

type CooperativePatentClassification {
  classification_cpc: String!
  patentClassificationCollections: [PatentClassificationCollection] @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_COOPERATIVEPATENTCLASSIFICATION", direction: "IN")
}

type InternationalPatentClassification {
  classification_ipc: String!
  patentClassificationCollections: [PatentClassificationCollection] @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_INTERNATIONALPATENTCLASSIFICATION", direction: "IN")
}

type PatentFamily {
  family_id: Int!
  size: Int!
  type: String!
  lensId: [LensID] @relation(name: "PATENTFAMILY_HAS_LENSID", direction: "OUT")
  lensIdRelation(first: Int, offset: Int): [LensIDRelation]
}

type PatentAbstract {
  _hash_id: String!
  lang: String!
  text: String!
  patents: [Patent] @relation(name: "PATENT_HAS_PATENTABSTRACT", direction: "IN")
}

type Entity {
  name: String!
  patentsInventor: [Patent] @relation(name: "INVENTOR", direction: "IN")
  patentsApplicant: [Patent] @relation(name: "APPLICANT", direction: "IN")
  patentsOwner: [Patent] @relation(name: "OWNER", direction: "IN")
}

type PatentTitle {
  _hash_id: String!
  lang: String!
  text: String!
  patents: [Patent] @relation(name: "PATENT_HAS_PATENTTITLE", direction: "IN")
}

type PatentLiteratureCitation {
  _hash_id: String!
  lens_id: String
  pub_key: String!
  patentnumber: [PatentNumber] @relation(name: "PATENTLITERATURECITATION_HAS_PATENTNUMBER", direction: "OUT")
  patentCitationCollections: [PatentCitationCollection] @relation(name: "PATENTCITATIONCOLLECTION_HAS_PATENTLITERATURECITATION", direction: "IN")
}

type PatentCitationCollection {
  id: String!
  patentLiteratureCitation: [PatentLiteratureCitation] @relation(name: "PATENTCITATIONCOLLECTION_HAS_PATENTLITERATURECITATION", direction: "OUT")
  patentLiteratureCitationRelation(first: Int, offset: Int): [PatentLiteratureCitationRelation]
  nonPatentLiteratureCitation: [NonPatentLiteratureCitation] @relation(name: "PATENTCITATIONCOLLECTION_HAS_NONPATENTLITERATURECITATION", direction: "OUT")
  nonPatentLiteratureCitationRelation(first: Int, offset: Int): [NonPatentLiteratureCitationRelation]
  patents: [Patent] @relation(name: "PATENT_HAS_PATENTCITATIONCOLLECTION", direction: "IN")
}

type NonPatentLiteratureCitation {
  _hash_id: String!
  cit_text: String!
  patentCitationCollections: [PatentCitationCollection] @relation(name: "PATENTCITATIONCOLLECTION_HAS_NONPATENTLITERATURECITATION", direction: "IN")
}

type USPatentClassification {
  classification_us: String!
  patentClassificationCollections: [PatentClassificationCollection] @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_USPATENTCLASSIFICATION", direction: "IN")
}

type PatentDescription {
  _hash_id: String!
  lang: String!
  text: String!
  patents: [Patent] @relation(name: "PATENT_HAS_PATENTDESCRIPTION", direction: "IN")
}

type PatentClaim {
  _hash_id: String!
  lang: String!
  text: String!
  patents: [Patent] @relation(name: "PATENT_HAS_PATENTCLAIM", direction: "IN")
}

type ReferenceCollection {
  id: String!
  reference: [Reference] @relation(name: "REFERENCECOLLECTION_HAS_REFERENCE", direction: "OUT")
  referenceRelation(first: Int, offset: Int): [ReferenceRelation]
  papers: [Paper] @relation(name: "PAPER_HAS_REFERENCECOLLECTION", direction: "IN")
}

type Reference {
  _hash_id: String!
  issn: String
  name: String!
  pages: String
  ref_id: String
  title: String
  venue: String
  volume: String
  year: Int
  paperId: [PaperID] @relation(name: "REFERENCE_HAS_PAPERID", direction: "OUT")
  paperIdRelation(first: Int, offset: Int): [PaperIdRelation]
  referenceCollections: [ReferenceCollection] @relation(name: "REFERENCECOLLECTION_HAS_REFERENCE", direction: "IN")
  citations: [Citation] @relation(name: "CITATION_HAS_REFERENCE", direction: "IN")
}

type BodyText {
  _hash_id: String!
  section: String!
  text: String!
  citation: [Citation] @relation(name: "BODYTEXT_HAS_CITATION", direction: "OUT")
  citationRelation(first: Int, offset: Int): [BodyTextCitation]
  bodyTextCollections: [BodyTextCollection] @relation(name: "BODYTEXTCOLLECTION_HAS_BODYTEXT", direction: "IN")
}

type Citation {
  _hash_id: String!
  end: Int!
  mention: String
  start: Int!
  text: String
  references: [Reference] @relation(name: "CITATION_HAS_REFERENCE", direction: "OUT")
  bodyTexts: [BodyText] @relation(name: "BODYTEXT_HAS_CITATION", direction: "IN")
  abstracts: [Abstract] @relation(name: "ABSTRACT_HAS_CITATION", direction: "IN")
}

type BodyTextCollection {
  id: String!
  bodyText: [BodyText] @relation(name: "BODYTEXTCOLLECTION_HAS_BODYTEXT", direction: "OUT")
  bodyTextRelation(first: Int, offset: Int): [BodyTextRelation]
  papers: [Paper] @relation(name: "PAPER_HAS_BODYTEXTCOLLECTION", direction: "IN")
}

type Affiliation {
  _hash_id: String!
  institution: String!
  laboratory: String!
  affiliation_has_location: [Location] @relation(name: "AFFILIATION_HAS_LOCATION", direction: "OUT")
  authors: [Author] @relation(name: "AUTHOR_HAS_AFFILIATION", direction: "IN")
}

type Location {
  _hash_id: String!
  addrLine: String
  country: String
  postBox: String
  postCode: String
  region: String
  settlement: String
  affiliations: [Affiliation] @relation(name: "AFFILIATION_HAS_LOCATION", direction: "IN")
}

interface Fragment {
  sequence: Int!
  kind: String!
  text: String!
}

type FromBodyText implements Fragment {
  sequence: Int!
  kind: String!
  text: String!
  mentions: [GeneSymbol] @relation(name: "MENTIONS", direction: "OUT")
  mentionsInterface: [GeneSymbolInterface] @cypher(${cypher`
    MATCH (this)-[mentions:MENTIONS]->(geneSymbol:GeneSymbol)
    RETURN geneSymbol
  `})
  bodyTexts: [BodyText] @relation(name: "HAS_FRAGMENT", direction: "IN")
  next: FromBodyText @relation(name: "NEXT", direction: OUT)
}

type FromAbstract implements Fragment {
  sequence: Int!
  kind: String!
  text: String!
  mentions: [GeneSymbol] @relation(name: "MENTIONS", direction: "OUT")
  mentionsInterface: [GeneSymbolInterface] @cypher(${cypher`
    MATCH (this)-[mentions:MENTIONS]->(geneSymbol:GeneSymbol)
    RETURN geneSymbol
  `})
  next: FromAbstract @relation(name: "NEXT", direction: OUT)
}

type FromPatentDescription implements Fragment {
  sequence: Int!
  kind: String!
  text: String!
  next: FromPatentDescription @relation(name: "NEXT", direction: OUT)
}

type FromPatentTitle implements Fragment {
  sequence: Int!
  kind: String!
  text: String!
  next: FromPatentTitle @relation(name: "NEXT", direction: OUT)
}

type FromPatentAbstract implements Fragment {
  sequence: Int!
  kind: String!
  text: String!
  next: FromPatentAbstract @relation(name: "NEXT", direction: OUT)
}

type FromPatentClaim implements Fragment {
  sequence: Int!
  kind: String!
  text: String!
  next: FromPatentClaim @relation(name: "NEXT", direction: OUT)
}

interface GeneSymbolInterface {
  sid: String!
  status: String
  taxid: String!
}

type GeneSymbol implements GeneSymbolInterface {
  sid: String!
  status: String
  taxid: String!
  synonym: [GeneSymbol] @relation(name: "SYNONYM", direction: "OUT")
  synonymInterface: [GeneSymbolInterface] @cypher(${cypher`
    MATCH (this)-[synonym:SYNONYM]->(geneSymbol:GeneSymbol)
    RETURN geneSymbol
  `})
  synonymRelation(first: Int, offset: Int): [Synonym]
}

type OmitSpecialChar implements GeneSymbolInterface {
  sid: String!
  status: String
  taxid: String!
}

type OmitLength implements GeneSymbolInterface {
  sid: String!
  status: String!
  taxid: String!
}

type OmitWord implements GeneSymbolInterface {
  sid: String!
  status: String
  taxid: String!
  synonym: [GeneSymbol] @relation(name: "SYNONYM", direction: "OUT")
  synonymInterface: [GeneSymbolInterface] @cypher(${cypher`
    MATCH (this)-[synonym:SYNONYM]->(geneSymbol:GeneSymbol)
    RETURN geneSymbol
  `})
  synonymRelation(first: Int, offset: Int): [Synonym]
}

type AuthorCollectionHasAuthor @relation(name: "AUTHORCOLLECTION_HAS_AUTHOR") {
 from: AuthorCollection!
 to: Author!
 position: Int!
}

type PaperHasPaperId @relation(name: "PAPER_HAS_PAPERID") {
 from: Paper!
 to: PaperID!
 position: Int!
}

type AbstractCollectionHasAbstract @relation(name: "ABSTRACTCOLLECTION_HAS_ABSTRACT") {
 from: AbstractCollection!
 to: Abstract!
 position: Int!
}

type Reported @relation(name: "REPORTED") {
 from: Province!
 to: DailyReport!
 source: String!
}

type PartOf @relation(name: "PART_OF") {
 from: Province!
 to: Country!
 source: String!
}

type CurrentTotal @relation(name: "CURRENT_TOTAL") {
 from: Country!
 to: AgeGroup!
 count: Int!
}

type CurrentMale @relation(name: "CURRENT_MALE") {
 from: Country!
 to: AgeGroup!
 count: Int!
}

type CurrentFemale @relation(name: "CURRENT_FEMALE") {
 from: Country!
 to: AgeGroup!
 count: Int!
}

type Maps @relation(name: "MAPS") {
 from: Gene!
 to: Gene!
 source: String!
 status: String
 taxid: String
}

type Codes @relation(name: "CODES") {
 from: Gene!
 to: Transcript!
 source: String!
 taxid: String
}

type IsA @relation(name: "IS_A") {
 from: GOTerm!
 to: GOTerm!
 source: String!
}

type Association @relation(name: "ASSOCIATION") {
 from: Protein!
 to: GOTerm!
 evidence: String!
 qualifier: String
}

type Expressed @relation(name: "EXPRESSED") {
 from: Gene!
 to: GtexDetailedTissue!
 val: String!
 valToString: String!
 value: Float!
}

type Child @relation(name: "CHILD") {
 from: Pathway!
 to: Pathway!
 source: String!
}

type Member @relation(name: "MEMBER") {
 from: Gene!
 to: Pathway!
 evidence: String!
 source: String!
}

type CooperativePatentClassificationRelation @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_COOPERATIVEPATENTCLASSIFICATION") {
 from: PatentClassificationCollection!
 to: CooperativePatentClassification!
 position: Int!
}

type InternationalPatentClassificationRelation @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_INTERNATIONALPATENTCLASSIFICATION") {
 from: PatentClassificationCollection!
 to: InternationalPatentClassification!
 position: Int!
}

type LensIDRelation @relation(name: "PATENTFAMILY_HAS_LENSID") {
 from: PatentFamily!
 to: LensID!
 position: Int!
}

type PatentHasPatentAbstract @relation(name: "PATENT_HAS_PATENTABSTRACT") {
 from: Patent!
 to: PatentAbstract!
 position: Int!
}

type Inventor @relation(name: "INVENTOR") {
 from: Patent!
 to: Entity!
 position: Int!
}

type Applicant @relation(name: "APPLICANT") {
 from: Patent!
 to: Entity!
 position: Int!
}

type PatentHasPatentTitle @relation(name: "PATENT_HAS_PATENTTITLE") {
 from: Patent!
 to: PatentTitle!
 position: Int!
}

type PatentLiteratureCitationRelation @relation(name: "PATENTCITATIONCOLLECTION_HAS_PATENTLITERATURECITATION") {
 from: PatentCitationCollection!
 to: PatentLiteratureCitation!
 position: Int!
}

type NonPatentLiteratureCitationRelation @relation(name: "PATENTCITATIONCOLLECTION_HAS_NONPATENTLITERATURECITATION") {
 from: PatentCitationCollection!
 to: NonPatentLiteratureCitation!
 position: Int!
}

type USPatentClassificationRelation @relation(name: "PATENTCLASSIFICATIONCOLLECTION_HAS_USPATENTCLASSIFICATION") {
 from: PatentClassificationCollection!
 to: USPatentClassification!
 position: Int!
}

type PatentHasPatentDescription @relation(name: "PATENT_HAS_PATENTDESCRIPTION") {
 from: Patent!
 to: PatentDescription!
 position: Int!
}

type PatentHasPatentClaim @relation(name: "PATENT_HAS_PATENTCLAIM") {
 from: Patent!
 to: PatentClaim!
 position: Int!
}

type Owner @relation(name: "OWNER") {
 from: Patent!
 to: Entity!
 position: Int!
}

type ReferenceRelation @relation(name: "REFERENCECOLLECTION_HAS_REFERENCE") {
 from: ReferenceCollection!
 to: Reference!
 position: Int!
}

type BodyTextCitation @relation(name: "BODYTEXT_HAS_CITATION") {
 from: BodyText!
 to: Citation!
 position: Int!
}

type BodyTextRelation @relation(name: "BODYTEXTCOLLECTION_HAS_BODYTEXT") {
 from: BodyTextCollection!
 to: BodyText!
 position: Int!
}

type PaperIdRelation @relation(name: "REFERENCE_HAS_PAPERID") {
 from: Reference!
 to: PaperID!
 position: Int!
}

type AbstractHasCitation @relation(name: "ABSTRACT_HAS_CITATION") {
 from: Abstract!
 to: Citation!
 position: Int!
}

type Synonym @relation(name: "SYNONYM") {
  from: GeneSymbol
  source: String!
  to: GeneSymbol
}
`;

// Generated
export const resolvers = {};
