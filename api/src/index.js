import { ApolloServer } from "apollo-server-express";
import express from "express";
import { makeAugmentedSchema } from "neo4j-graphql-js";
import neo4j from "neo4j-driver";
import dotenv from "dotenv";
// Import GraphQL type definitions and resolvers
import { typeDefs, resolvers } from "./schema";

// set environment variables from ../.env
dotenv.config();

// Build an express server
const app = express();

// Specify port and path for GraphQL endpoint
const port = process.env.GRAPHQL_LISTEN_PORT || 4001;
const path = process.env.GRAPHQL_URI || "/";

const driver = neo4j.driver(
  process.env.COVID_GRAPH_NEO4J_URI || "bolt+public://db.covidgraph.org:7687",
  neo4j.auth.basic(
    process.env.COVID_GRAPH_NEO4J_USER || "public",
    process.env.COVID_GRAPH_NEO4J_PASSWORD || "corona"
  )
);

// Build an executable GraphQL schema augmented for Neo4j
const augmentedSchema = makeAugmentedSchema({
  typeDefs,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  resolvers,
  config: {
    debug: true,
    // Mutation API generation disabled for read-only CovidGraph DB
    mutation: false
  }
});

// Setup the Apollo GraphQL server
const server = new ApolloServer({
  schema: augmentedSchema,
  context: ({ req }) => {
    return {
      driver,
      req
    };
  },
  introspection: true,
  playground: true
});

/*
 * Optionally, apply Express middleware for authentication, etc
 * This also also allows us to specify a path for the GraphQL endpoint
 */
server.applyMiddleware({ app, path });

// Start the server!
app.listen({ port, path }, () => {
  console.log(
    `CovidGraph GraphQL API ready at http://localhost:${port}${path}`
  );
});
