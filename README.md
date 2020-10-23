This project serves to develop and maintain a [Neo4j-GraphQL](https://grandstack.io/docs/neo4j-graphql-js) for the Neo4j graph [CovidGraph](https://covidgraph.org/) project. 

## Schema

[![Image from covidgraph.org](https://covidgraph.org/img/content-img/Schema_v1.1_no_logo.png)](http://www.youtube.com/watch?v=1JLs166lPcA 'Image from covidgraph.org')

_Image from covidgraph.org_

### Patents
  * [Patent](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/5f3d1da4fffe6bc6982f52caa73bfb463df72621/api/src/schemas/Patents/typeDefs/Patent.js#L5)
  * [PatentTitle](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/5f3d1da4fffe6bc6982f52caa73bfb463df72621/api/src/schemas/Patents/typeDefs/Patent.js#L189)
  * [PatentAbstract](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/5f3d1da4fffe6bc6982f52caa73bfb463df72621/api/src/schemas/Patents/typeDefs/Patent.js#L156)
  * [PatentDescription](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/5f3d1da4fffe6bc6982f52caa73bfb463df72621/api/src/schemas/Patents/typeDefs/Patent.js#L217)
  * [PatentClaim](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/5f3d1da4fffe6bc6982f52caa73bfb463df72621/api/src/schemas/Patents/typeDefs/Patent.js#L203)
  * [PatentNumber](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/5f3d1da4fffe6bc6982f52caa73bfb463df72621/api/src/schemas/Patents/typeDefs/Patent.js#L46)
  * [Entity](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/5f3d1da4fffe6bc6982f52caa73bfb463df72621/api/src/schemas/Patents/typeDefs/Patent.js#L170)

### BioBERT (NLP + NER)
  * [Fragment]()
  * [Keyword]()
  * [NamedEntity]() 
  * [GOTerm]() (Biomedical)
  * [Word]()

### BioMedical
  * [Gene]()
    * [GeneSymbol]()
    * [GtexTissue]()
    * [Pathway]()
    * [Disease]()
      * [Anatomy]()
    * [Transcript]()
      * [Protein]()

### Papers
  * [Paper]()
    * [Author]()
      * [Affiliation]()
        * [Location]()
    * [ReferenceCollection]()
      * [BodyText]()
      * [Reference]()
      * [Abstract]()
        * [Citation]()

### Clinical Trials
  * [ClinicalTrial]()
    * [Design]()
    * [InclusionCriteria]()
    * [ExclusionCriteria]()
    * [Status]()
    * [Description]()
    * [Contact]()
    * [Phase]()
    * [Facility]()

### Statistical & Geographic
  * [Country]()
    * [AgeGroup]()
    * [City]()
    * [Province]()
      * [DailyReport]()

## Quickstart

    * Paths: (ClinicalTrial.isStudying.keywords)
    * Paths
      * (Paper.abstractCollection.abstracts.abstract.mentions.namedEntity)
