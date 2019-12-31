/**
 * @flow
 * @relayHash bdaab2016b7c554331d1a3f2c55d7564
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TagList_tags$ref = any;
export type routes_TagList_QueryVariables = {||};
export type routes_TagList_QueryResponse = {|
  +allTags: ?{|
    +$fragmentRefs: TagList_tags$ref
  |}
|};
export type routes_TagList_Query = {|
  variables: routes_TagList_QueryVariables,
  response: routes_TagList_QueryResponse,
|};
*/


/*
query routes_TagList_Query {
  allTags {
    ...TagList_tags
  }
}

fragment TagList_tags on TagNodeConnection {
  edges {
    node {
      ...Tag_tag
      id
    }
  }
}

fragment Tag_tag on TagNode {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routes_TagList_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allTags",
        "storageKey": null,
        "args": null,
        "concreteType": "TagNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TagList_tags",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_TagList_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allTags",
        "storageKey": null,
        "args": null,
        "concreteType": "TagNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "TagNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "TagNode",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "routes_TagList_Query",
    "id": null,
    "text": "query routes_TagList_Query {\n  allTags {\n    ...TagList_tags\n  }\n}\n\nfragment TagList_tags on TagNodeConnection {\n  edges {\n    node {\n      ...Tag_tag\n      id\n    }\n  }\n}\n\nfragment Tag_tag on TagNode {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'ab885d3410598e749aa680562e9056e2';
module.exports = node;
