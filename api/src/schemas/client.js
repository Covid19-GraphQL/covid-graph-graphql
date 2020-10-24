import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

// set environment variables from .env
dotenv.config()

const VERCEL_URI = `https://covid-graph-graphql.now.sh/`

// Uncomment for local testing
// Specify host, port and path for GraphQL endpoint
// const port = process.env.GRAPHQL_SERVER_PORT || 4001
// const host = process.env.GRAPHQL_SERVER_HOST || '0.0.0.0'
// const path = process.env.GRAPHQL_SERVER_PATH || '/graphql'

// Used by Ava tests
export const client = new ApolloClient({
  link: new HttpLink({ uri: VERCEL_URI, fetch: fetch }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})
