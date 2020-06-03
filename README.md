# covid-graph-graphql
A Neo4j-GraphQL API for the CovidGraph project.

See: https://covidgraph.org

GraphQL API: https://covid-graph-graphql.now.sh/

#### Roadmap
Here is an initial road map of some next steps for the API.

##### Architecture
* Use the CovidGraph schema as a [federated schema](https://grandstack.io/docs/apollo-federation-gateway-with-neo4j) behind an Apollo Gateway and show an example using a local Neo4j database as the data source for a second federated schema

##### Project Organization
* Split the schema into separate files
  * Consider using the new graphql import features in [graphql-tools](https://the-guild.dev/blog/graphql-tools-v6)
* Switch to using [GraphiQL](https://github.com/graphql/graphiql/blob/master/packages/graphiql/README.md) from Playground

##### Schema
* Add type definitions for any missing or recently added CovidGraph data sources
* Add the [helpful Cypher queries](https://github.com/covidgraph/documentation/blob/master/helpful-queries.md) shared by CovidGraph

##### Testing
* Use all queries in `/api/examples` for GraphQL -> Cypher translation tests run with `ava`
* Write a `@cypher` mutation to seed a local database with example data for integration tests
* Write scripts that identify whether any type definitions are missing, or compare the current schema to the result of using `inferSchema`

##### Documentation
* Comment more of the schema
* Setup documentation / walkthroughs for example use cases on https://covid19-graphql.github.io/
