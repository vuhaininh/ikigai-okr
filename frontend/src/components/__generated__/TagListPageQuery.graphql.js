/**
 * @flow
 * @relayHash 665f20db18ae13461e841bd22081d742
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TagList_alltags$ref = any;
export type TagListPageQueryVariables = {||};
export type TagListPageQueryResponse = {|
  +$fragmentRefs: TagList_alltags$ref
|};
export type TagListPageQuery = {|
  variables: TagListPageQueryVariables,
  response: TagListPageQueryResponse,
|};
*/


/*
query TagListPageQuery {
  ...TagList_alltags
}

fragment TagList_alltags on Query {
  allTags(first: 10) {
    edges {
      node {
        ...Tag_tag
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Tag_tag on TagNode {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
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
        "kind": "FragmentSpread",
        "name": "TagList_alltags",
        "args": null
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
        "name": "allTags",
        "storageKey": "allTags(first:10)",
        "args": (v0/*: any*/),
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "allTags",
        "args": (v0/*: any*/),
        "handle": "connection",
        "key": "TagList_allTags",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TagListPageQuery",
    "id": null,
    "text": "query TagListPageQuery {\n  ...TagList_alltags\n}\n\nfragment TagList_alltags on Query {\n  allTags(first: 10) {\n    edges {\n      node {\n        ...Tag_tag\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Tag_tag on TagNode {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd5a705a9587d2449323b092a7cd3089b';
module.exports = node;
