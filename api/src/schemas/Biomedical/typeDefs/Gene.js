import { gql } from 'apollo-server'
import { cypher } from 'neo4j-graphql-js'

export const typeDefs = gql`
  type Gene {
    sid: ID! @id
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
    transcripts: [GeneCodes]
    expressions: [Expressed]
    pathways: [Member]
    mapsGenes: [MapsGene]
    mapsGeneSymbols: [MapsGeneSymbol]
    mapsGeneSymbolsWithOmitSpecialChar: [MapsGeneSymbolsWithOmitedSpecialChar]
    mapsGeneSymbolsWithOmitLength: [MapsGeneSymbolsWithOmitLength]
    mapsGeneSymbolsWithOmitWord: [MapsGeneSymbolsWithOmitWord]
    diseases: [AssociatesDaG]
  }

  type GeneCodes @relation(name: "CODES", from: "gene", to: "transcript") {
    gene: Gene!
    source: String!
    taxid: String
    transcript: Transcript!
  }

  type Transcript {
    sid: ID! @id
    length: String
    source: String!
    status: String
    taxid: String!
    version: String
    genes: [GeneCodes]
    proteins: [ProteinCodes]
    mapsTranscripts: [MapsTranscript]
  }

  type MapsTranscript @relation(name: "MAPS", from: "mappedBy", to: "transcript") {
    mappedBy: Transcript!
    source: String!
    status: String
    transcript: Transcript!
  }

  type ProteinCodes @relation(name: "CODES", from: "transcript", to: "protein") {
    transcript: Transcript!
    source: String!
    taxid: String
    protein: Protein!
  }

  type Expressed @relation(from: "gene", to: "tissue") {
    gene: Gene!
    val: String!
    valToString: String!
    value: Float!
    tissue: GtexDetailedTissue!
  }

  type GtexDetailedTissue {
    name: String! @id
    genes: [Expressed]
    tissues: [GtexTissue] @relation(name: "PARENT", direction: IN)
  }

  type GtexTissue {
    name: String! @id
    detail: [GtexDetailedTissue] @relation(name: "PARENT", direction: OUT)
    samples: [GtexSample] @relation(name: "MEASURES", direction: IN)
  }

  type GtexSample {
    sid: ID! @id
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
    measures: [GtexTissue] @relation(name: "MEASURES", direction: OUT)
  }

  type Member @relation(from: "gene", to: "pathway") {
    gene: Gene!
    evidence: String!
    source: String!
    pathway: Pathway!
  }

  type Pathway {
    sid: ID! @id
    name: String!
    org: String!
    source: String!
    taxid: String!
    genes: [Member]
    pathways: [Child]
  }

  type Child @relation(from: "child", to: "parent") {
    child: Pathway!
    source: String!
    parent: Pathway!
  }

  type MapsGene @relation(name: "MAPS", from: "mappedBy", to: "gene") {
    mappedBy: Gene!
    source: String!
    status: String
    symbol: Gene!
  }

  type MapsGeneSymbol @relation(name: "MAPS", from: "mappedBy", to: "symbol") {
    mappedBy: Gene!
    source: String!
    status: String
    symbol: GeneSymbol!
  }

  type MapsGeneSymbolsWithOmitedSpecialChar @relation(name: "MAPS", from: "mappedBy", to: "symbol") {
    mappedBy: Gene!
    source: String!
    status: String
    symbol: OmitSpecialChar!
  }

  type MapsGeneSymbolsWithOmitLength @relation(name: "MAPS", from: "mappedBy", to: "symbol") {
    mappedBy: Gene!
    source: String!
    status: String
    symbol: OmitLength!
  }

  type MapsGeneSymbolsWithOmitWord @relation(name: "MAPS", from: "mappedBy", to: "symbol") {
    mappedBy: Gene!
    source: String!
    status: String
    symbol: OmitWord!
  }  
`
