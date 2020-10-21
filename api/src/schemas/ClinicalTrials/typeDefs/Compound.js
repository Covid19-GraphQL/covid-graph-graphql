import { gql } from 'apollo-server';
import { cypher } from 'neo4j-graphql-js';

export const typeDefs = gql`
  type Compound {
    _id: ID! @id
    description: String
    type: String
    name: String
    source: String!
    company: String
    ttd_id: ID
    chebi_id: ID
    chemspider_id: Float
    drugbank_id: ID
    kegg_drug_id: ID
    kegg_id: ID
    pubchem_id: ID
    unii: ID
    inchi: ID
    inchikey: ID
    cas_number: String
    accession_numbers: String
    therapeutic_class: String
    drug_class: String
    compound_class: String
    groups: String
    categories: String
    atc_codes: String
    source_url: String!
    drug_formula: String
    drug_smiles: String
    drug_type: String
    highest_stat: String
    indication: String
    mechanism: String
    synonyms: String
    targets: [Targets]
    isInhibitor: [IsInhibitor]
    isAntagonist: [IsAntagonist]
    isAgonist: [IsAgonist]
    isActivator: [IsActivator]
    isBinder: [IsBinder]
  }

  type Targets @relation(from: "compound", to: "target") {
    compound: Compound!
    activity: String!
    moa: String
    reference: String!
    target: Target!
  }

  type IsInhibitor @relation(from: "compound", to: "target") {
    compound: Compound!
    activity: String!
    moa: String!
    reference: String!
    target: Target!
  }

  type IsAntagonist @relation(from: "compound", to: "target") {
    compound: Compound!
    activity: String!
    moa: String!
    reference: String!
    target: Target!
  }

  type IsAgonist @relation(from: "compound", to: "target") {
    compound: Compound!
    activity: String!
    moa: String!
    reference: String!
    target: Target!
  }

  type IsActivator @relation(from: "compound", to: "target") {
    compound: Compound!
    activity: String!
    moa: String!
    reference: String!
    target: Target!
  }

  type IsBinder @relation(from: "compound", to: "target") {
    compound: Compound!
    activity: String!
    moa: String!
    reference: String!
    target: Target!
  }

  type Target {
    _id: ID! @id
    ttd_id: ID!
    uniprot_id: ID
    name: String!
    type: String!
    geneName: String
    function: String
    sequence: String
    license: String!
    source: String!
    ec_number: String
    bio_class: String
    synonyms: String
    targets: [Targets]
    inhibitors: [IsInhibitor]
    antagonists: [IsAntagonist]
    agonists: [IsAgonist]
    activators: [IsActivator]
    binders: [IsBinder]
  }
`;