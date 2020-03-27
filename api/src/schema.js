import fs from "fs";
import path from "path";

export const typeDefs = fs
  .readFileSync(path.join(__dirname, "schema.graphql"))
  .toString("utf-8");

export const resolvers = {};
