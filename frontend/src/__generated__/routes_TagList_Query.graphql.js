/**
 * @flow
 * @relayHash 0d977cbeb4b18dd1c62833466b997ac7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TagList_tags$ref = any;
export type routes_TagList_QueryVariables = {||};
export type routes_TagList_QueryResponse = {|
  +tags: ?{|
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
  tags {
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
  user {
    email
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
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
        "name": "tags",
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
        "name": "tags",
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
                  (v0/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "user",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserNode",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "email",
                        "args": null,
                        "storageKey": null
                      },
                      (v0/*: any*/)
                    ]
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
    "text": "query routes_TagList_Query {\n  tags {\n    ...TagList_tags\n  }\n}\n\nfragment TagList_tags on TagNodeConnection {\n  edges {\n    node {\n      ...Tag_tag\n      id\n    }\n  }\n}\n\nfragment Tag_tag on TagNode {\n  id\n  name\n  user {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b69e8f239640300e22a2150e0c5b73f5';
module.exports = node;
