import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import dotenv from 'dotenv'
import { port, path, host } from './index'

// set environment variables from .env
dotenv.config()

// Used by Ava tests
// link: new HttpLink({ uri: `http://${host}:${port}`, fetch: fetch }),
export const client = new ApolloClient({
  link: new HttpLink({ uri: `http://${host}:${port}${path}`, fetch: fetch }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    }
  }
});