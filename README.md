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
  * [Fragment](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/BioBERT/typeDefs/Fragment.js#L23)
  * [Keyword](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/BioBERT/typeDefs/Keyword.js#L10)
  * [NamedEntity](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/BioBERT/typeDefs/NamedEntity.js#L9) 
  * [GOTerm](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/BioBERT/typeDefs/GOTerm.js#L11)
  * [Word](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/BioBERT/typeDefs/Word.js#L6)

### BioMedical
  * [Gene](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Biomedical/typeDefs/Gene.js#L5)
    * [GeneSymbol](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Biomedical/typeDefs/GeneSymbol.js#L5)
    * [GtexTissue](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Biomedical/typeDefs/Gene.js#L84)
    * [Pathway](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Biomedical/typeDefs/Gene.js#L164)
    * [Disease](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Biomedical/typeDefs/Disease.js#L5)
      * [Anatomy](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Biomedical/typeDefs/Disease.js#L41)
    * [Transcript](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Biomedical/typeDefs/Gene.js#L44)
      * [Protein](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Biomedical/typeDefs/Protein.js#L5)

### Papers
  * [Paper](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Papers/typeDefs/Paper.js#L5)
    * [Author](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Papers/typeDefs/Paper.js#L32)
      * [Affiliation](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Papers/typeDefs/Paper.js#L44)
        * [Location](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Papers/typeDefs/Paper.js#L52)
    * [ReferenceCollection](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Papers/typeDefs/Paper.js#L92)
      * [BodyText](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Papers/typeDefs/Paper.js#L161)
      * [Reference](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Papers/typeDefs/Paper.js#L77)
      * [Abstract](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Papers/typeDefs/Paper.js#L122)
        * [Citation](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Papers/typeDefs/Paper.js#L145)

### Clinical Trials
  * [ClinicalTrial](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/ClinicalTrials/typeDefs/ClinicalTrial.js#L5)
    * [Design](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/ClinicalTrials/typeDefs/ClinicalTrial.js#L162)
    * [InclusionCriteria](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/ClinicalTrials/typeDefs/ClinicalTrial.js#L206)
    * [ExclusionCriteria](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/ClinicalTrials/typeDefs/ClinicalTrial.js#L211)
    * [Status](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/ClinicalTrials/typeDefs/ClinicalTrial.js#L121)
    * [Description](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/ClinicalTrials/typeDefs/ClinicalTrial.js#L156)
    * [Contact](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/ClinicalTrials/typeDefs/ClinicalTrial.js#L216)
    * [Phase](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/ClinicalTrials/typeDefs/ClinicalTrial.js#L98)
    * [Facility](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/ClinicalTrials/typeDefs/ClinicalTrial.js#L55)

### Statistical & Geographic
  * [Country](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Cases/typeDefs/Country.js#L5)
    * [AgeGroup](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Cases/typeDefs/Country.js#L67)
    * [City](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Cases/typeDefs/Country.js#L15)
    * [Province](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Cases/typeDefs/Country.js#L28)
      * [DailyReport](https://github.com/Covid19-GraphQL/covid-graph-graphql/blob/076ffb5423a79331a51d8e192016a926bf78f04d/api/src/schemas/Cases/typeDefs/Country.js#L43)