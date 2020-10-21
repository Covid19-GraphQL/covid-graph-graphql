import { gql } from 'apollo-server';
import { cypher } from 'neo4j-graphql-js';

export const typeDefs = gql`
  type ClinicalTrial {
    NCTId: ID! @id
    data_source: String!
    url: String!
    refersTo: [Citation] @relation(name: "REFERS_TO", direction: OUT)
    refersToUrl: [Link] @relation(name: "REFERS_TO_URL", direction: OUT)
    useReferenceAs: [ReferenceType] @relation(name: "USE_REFERENCE_AS", direction: OUT)
    conductedAt: [Facility] @relation(name: "CONDUCTED_AT", direction: OUT)
    investigates: [Intervention] @relation(name: "INVESTIGATES_INTERVENTION", direction: OUT)
    type: [StudyType] @relation(name: "IS_TYPE", direction: OUT)
    isSponsoredBy: [Sponsor] @relation(name: "IS_SPONSORED_BY", direction: OUT)
    isSupportedBy: [Collaborator] @relation(name: "IS_SUPPORTED_BY", direction: OUT)
    isFdaRegulatedDevice: [Response] @relation(name: "IS_FDA_REGULATED_DEVICE", direction: OUT)
    isUnapprovedDevice: [Response] @relation(name: "IS_UNAPPROVED_DEVICE", direction: OUT)
    isFdaRegulatedDrug: [Response] @relation(name: "IS_FDA_REGULATED_DRUG", direction: OUT)
    expandedAccess: [Response] @relation(name: "HAS_EXPANDED_ACCESS", direction: OUT)
    isStudying: [Condition] @relation(name: "IS_STUDYING", direction: OUT)
    isPhase: [Phase] @relation(name: "IS_PHASE", direction: OUT)
    purpose: [Purpose] @relation(name: "HAS_PURPOSE", direction: OUT)
    identifications: [StudyIdentification] @relation(name: "HAS_IDENTIFICATION", direction: OUT)
    status: [Status] @relation(name: "HAS_STATUS", direction: OUT)
    stopped: [StopReason] @relation(name: "WAS_STOPPED", direction: OUT)
    started: [Start] @relation(name: "STARTED_AT", direction: OUT)
    completed: [Completed] @relation(name: "COMPLETED_AT", direction: OUT)
    conductedBy: [Investigator] @relation(name: "IS_CONDUCTED_BY", direction: OUT)
    description: [Description] @relation(name: "HAS_DESCRIPTION", direction: OUT)
    studyDesign: [Design] @relation(name: "HAS_STUDY_DESIGN", direction: OUT)
    observationPeriod: [ObservationPeriod] @relation(name: "HAS_OBSERVATION_PERIOD", direction: OUT)
    primaryOutcome: [Outcome] @relation(name: "HAS_PRIMARY_OUTCOME", direction: OUT)
    secondaryOutcome: [Outcome] @relation(name: "HAS_SECONDARY_OUTCOME", direction: OUT)
    otherOutcome: [Outcome] @relation(name: "HAS_OTHER_OUTCOME", direction: OUT)
    studyPopulation: [StudyPopulation] @relation(name: "HAS_STUDY_POPULATION", direction: OUT)
    inclusionCriteria: [InclusionCriteria] @relation(name: "HAS_INCLUSION_CRITERIA", direction: OUT)
    exclusionCriteria: [ExclusionCriteria] @relation(name: "HAS_EXCLUSION_CRITERIA", direction: OUT)
    contactPerson: [Contact] @relation(name: "HAS_CONTACT_PERSON", direction: OUT)
    retainedBioSamples: [BioSpecimen] @relation(name: "HAS_SMAPLES_RETAINED_IN_BIOREPOSITORY", direction: OUT) #//! typo
    studyArms: [Arm] @relation(name: "HAS_STUDY_ARMS", direction: OUT)
  }

  type Link {
    url: String! @id
    trials: [ClinicalTrial] @relation(name: "REFERS_TO_URL", direction: IN)
  }

  type ReferenceType {
    name: String! @id
    citations: [Citation] @relation(name: "IS_REFERENCE_TYPE", direction: IN)
    trials: [ClinicalTrial] @relation(name: "USE_REFERENCE_AS", direction: IN)
  }

  type Facility {
    name: String! @id
    trials: [ClinicalTrial] @relation(name: "CONDUCTED_AT", direction: IN)
  }

  type Intervention {
    name: String! @id
    description: String!
    type: String!
    trials: [ClinicalTrial] @relation(name: "INVESTIGATES_INTERVENTION", direction: IN)
  }

  type StudyType {
    type: String! @id
    trials: [ClinicalTrial] @relation(name: "IS_TYPE", direction: IN)
  }

  type Sponsor {
    name: String! @id
    trials: [ClinicalTrial] @relation(name: "IS_SPONSORED_BY", direction: IN)
  }

  type Collaborator {
    name: String! @id
    trials: [ClinicalTrial] @relation(name: "IS_SUPPORTED_BY", direction: IN)
  }

  type Response {
    YN: String! @id
    isFdaRegulatedDevice: [ClinicalTrial] @relation(name: "IS_FDA_REGULATED_DEVICE", direction: IN)
    isUnapprovedDevice: [ClinicalTrial] @relation(name: "IS_UNAPPROVED_DEVICE", direction: IN)
    isFdaRegulatedDrug: [ClinicalTrial] @relation(name: "IS_FDA_REGULATED_DRUG", direction: IN)
    expandedAccess: [ClinicalTrial] @relation(name: "HAS_EXPANDED_ACCESS", direction: IN)
  }

  type Condition {
    disease: String! @id
    keywords: [Keyword] @relation(name: "HAS_KEYWORD", direction: OUT)
    trials: [ClinicalTrial] @relation(name: "IS_STUDYING", direction: IN)
  }

  type Keyword {
    word: String! @id
    conditions: [Condition] @relation(name: "HAS_KEYWORD", direction: IN)
  }

  type Phase {
    phase: String! @id
    trials: [ClinicalTrial] @relation(name: "IS_PHASE", direction: IN)
  }

  type Purpose {
    name: String! @id
    trials: [ClinicalTrial] @relation(name: "HAS_PURPOSE", direction: IN)
  }

  type StudyIdentification {
    studyId: String! @id
    acronym: String!
    trials: [ClinicalTrial] @relation(name: "HAS_IDENTIFICATION", direction: IN)
    title: [Title] @relation(name: "HAS_TITLE", direction: OUT)
  }

  type Title {
    briefTitle: String! @id
    officialTitle: String!
    identifications: [StudyIdentification] @relation(name: "HAS_TITLE", direction: IN)
  }

  type Status {
    status: String! @id
    stopReason: [StopReason] @relation(name: "HAS_REASON", direction: OUT)
    trials: [ClinicalTrial] @relation(name: "HAS_STATUS", direction: IN)
  }

  type StopReason {
    reason: String! @id
    trials: [ClinicalTrial] @relation(name: "WAS_STOPPED", direction: IN)
    status: [Status] @relation(name: "HAS_REASON", direction: IN)
  }

  type Start {
    date: String! @id # property is not currently a Cypher Date type
    trials: [ClinicalTrial] @relation(name: "STARTED_AT", direction: IN)
  }

  type Completed {
    completionDate: String! @id # property is not currently a Cypher Date type
    primaryCompletionDate: String! # property is not currently a Cypher Date type
    trials: [ClinicalTrial] @relation(name: "COMPLETED_AT", direction: IN)
  }

  type Investigator {
    name: String! @id
    affiliation: String!
    trials: [ClinicalTrial] @relation(name: "IS_CONDUCTED_BY", direction: IN)
    responsibilities: [Responsible] @relation(name: "IS_RESPOSIBLE", direction: IN)
  }

  type Responsible {
    type: String! @id
    investigator: [Investigator] @relation(name: "IS_RESPOSIBLE", direction: OUT)
  }

  type Description {
    detailed: String! @id
    summary: String!
    trials: [ClinicalTrial] @relation(name: "HAS_DESCRIPTION", direction: IN)
  }

  type Design {
    # no required field for lookup id
    model: String
    name: String
    description: String
    trials: [ClinicalTrial] @relation(name: "HAS_STUDY_DESIGN", direction: IN)
    arms: [Arm] @relation(name: "BELONGS_TO_MODEL", direction: IN)
  }

  type ObservationPeriod {
    time: String! @id
    trials: [ClinicalTrial] @relation(name: "HAS_OBSERVATION_PERIOD", direction: IN)
  }

  type Outcome {
    name: String! @id
    description: String
    time: String!
    type: String!
    primaryOutcomes: [ClinicalTrial] @relation(name: "HAS_PRIMARY_OUTCOME", direction: IN)
    secondaryOutcomes: [ClinicalTrial] @relation(name: "HAS_SECONDARY_OUTCOME", direction: IN)
    otherOutcomes: [ClinicalTrial] @relation(name: "HAS_OTHER_OUTCOME", direction: IN)
  }

  type StudyPopulation {
    name: String! @id
    sampling: String!
    genders: [Gender] @relation(name: "INCLUDES_GENDER", direction: OUT)
    ageRanges: [AgeRange] @relation(name: "INCLUDES_AGE_RANGE", direction: OUT)
    trials: [ClinicalTrial] @relation(name: "HAS_STUDY_POPULATION", direction: IN)
  }

  type Gender {
    name: String! @id
    description: String!
    populations: [StudyPopulation] @relation(name: "INCLUDES_GENDER", direction: IN)
  }

  type AgeRange {
    maxAge: String! @id
    minAge: String!
    populations: [StudyPopulation] @relation(name: "INCLUDES_AGE_RANGE", direction: IN)
  }

  type InclusionCriteria {
    criteria: String! @id
    trials: [ClinicalTrial] @relation(name: "HAS_INCLUSION_CRITERIA", direction: IN)
  }

  type ExclusionCriteria {
    criteria: String! @id
    trials: [ClinicalTrial] @relation(name: "HAS_EXCLUSION_CRITERIA", direction: IN)
  }

  type Contact {
    email: String! @id
    name: String!
    trials: [ClinicalTrial] @relation(name: "HAS_CONTACT_PERSON", direction: IN)
  }

  type BioSpecimen {
    retension: String! @id
    description: String!
    trials: [ClinicalTrial] @relation(name: "HAS_SMAPLES_RETAINED_IN_BIOREPOSITORY", direction: IN)
  }

  type Arm {
    name: String! @id
    description: String
    model: [Design] @relation(name: "BELONGS_TO_MODEL", direction: OUT)
    trials: [ClinicalTrial] @relation(name: "HAS_STUDY_ARMS", direction: IN)
  }
`;
