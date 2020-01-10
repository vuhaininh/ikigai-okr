/**
 * @flow
 * @relayHash 9082f0095614eb95352fa2aa930b6214
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TagList_tags$ref = any;
export type TagListPageQueryVariables = {||};
export type TagListPageQueryResponse = {|
  +tags: ?{|
    +$fragmentRefs: TagList_tags$ref
  |}
|};
export type TagListPageQuery = {|
  variables: TagListPageQueryVariables,
  response: TagListPageQueryResponse,
|};
*/


/*
query TagListPageQuery {
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
    "name": "TagListPageQuery",
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
    "name": "TagListPageQuery",
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
    "name": "TagListPageQuery",
    "id": null,
    "text": "query TagListPageQuery {\n  tags {\n    ...TagList_tags\n  }\n}\n\nfragment TagList_tags on TagNodeConnection {\n  edges {\n    node {\n      ...Tag_tag\n      id\n    }\n  }\n}\n\nfragment Tag_tag on TagNode {\n  id\n  name\n  user {\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '25c1b341f0fffcd82855c28d3f393b8f';
module.exports = node;
