/**
 * @flow
 * @relayHash 9e7f3e1dd97855eff411cd3117103b5b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TagList_tags$ref = any;
export type TagListPageQueryVariables = {||};
export type TagListPageQueryResponse = {|
  +allTags: ?{|
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
    "name": "TagListPageQuery",
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
    "name": "TagListPageQuery",
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
    "name": "TagListPageQuery",
    "id": null,
    "text": "query TagListPageQuery {\n  allTags {\n    ...TagList_tags\n  }\n}\n\nfragment TagList_tags on TagNodeConnection {\n  edges {\n    node {\n      ...Tag_tag\n      id\n    }\n  }\n}\n\nfragment Tag_tag on TagNode {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '05979b0ee86e8a13e35ba322cbd11978';
module.exports = node;
