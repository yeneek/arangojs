import {
  BaseCollection,
  DocumentCollection,
  EdgeCollection,
  types
} from "./collection";
import Graph, {
  EdgeCollection as GraphEdgeCollection,
  VertexCollection as GraphVertexCollection
} from "./graph";

import ArangoError from "./error";
import ArrayCursor from "./cursor";
import Connection from "./connection";
import Database from "./database";
import Route from "./route";
import aql from "./aql-query";

module.exports = exports = (...args) => new Database(...args);
Object.assign(module.exports, {
  ArangoError,
  ArrayCursor,
  BaseCollection,
  Connection,
  Database,
  DocumentCollection,
  EdgeCollection,
  Graph,
  GraphEdgeCollection,
  GraphVertexCollection,
  Route,
  aql,
  types
});
