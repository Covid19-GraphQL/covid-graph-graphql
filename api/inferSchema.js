import { inferSchema } from 'neo4j-graphql-js';
import neo4j from 'neo4j-driver';
import { createWriteStream } from 'fs';

const writeStream = createWriteStream('./infered-schema.graphql');

const driver = neo4j.driver(
  process.env.COVID_GRAPH_NEO4J_URI || "bolt://db.covidgraph.org:7687",
  neo4j.auth.basic(
    process.env.COVID_GRAPH_NEO4J_USER || "public",
    process.env.COVID_GRAPH_NEO4J_PASSWORD || "corona"
  )
);

const schemaInferenceOptions = {
  alwaysIncludeRelationships: true
};

inferSchema(driver, schemaInferenceOptions).then(result => {
  writeStream.write(result.typeDefs);
});