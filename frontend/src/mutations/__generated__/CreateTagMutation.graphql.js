/**
 * @flow
 * @relayHash 4736d5830e1e9cebc9b1ada63d544035
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTagInput = {|
  name: string,
  user: string,
  isPublic?: ?boolean,
  objectiveSet?: ?$ReadOnlyArray<?string>,
|};
export type CreateTagMutationVariables = {|
  input: CreateTagInput
|};
export type CreateTagMutationResponse = {|
  +createTag: ?{|
    +tag: ?{|
      +id: string,
      +name: string,
      +user: {|
        +id: string,
        +email: string,
      |},
    |}
  |}
|};
export type CreateTagMutation = {|
  variables: CreateTagMutationVariables,
  response: CreateTagMutationResponse,
|};
*/


/*
mutation CreateTagMutation(
  $input: CreateTagInput!
) {
  createTag(input: $input) {
    tag {
      id
      name
      user {
        id
        email
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateTagInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTag",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateTagMutation",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tag",
        "storageKey": null,
        "args": null,
        "concreteType": "TagNode",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateTagMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateTagMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateTagMutation",
    "id": null,
    "text": "mutation CreateTagMutation(\n  $input: CreateTagInput!\n) {\n  createTag(input: $input) {\n    tag {\n      id\n      name\n      user {\n        id\n        email\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd10151c90b6393cf9d560dbcc5ae9f65';
module.exports = node;
