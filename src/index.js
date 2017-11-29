import Database from "./database";
export default function arangojs(...args) {
  return new Database(...args);
}

export { default as ArangoError } from "./error";
export { default as ArrayCursor } from "./cursor";
export { default as Connection } from "./connection";
export {
  default as Graph,
  VertexCollection as GraphVertexCollection,
  EdgeCollection as GraphEdgeCollection
} from "./graph";
export { default as Route } from "./route";
export { default as aql } from "./aql-query";
export {
  DocumentCollection,
  EdgeCollection,
  BaseCollection,
  types
} from "./collection";
export { Database };
