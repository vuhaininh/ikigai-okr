/**
 * @flow
 * @relayHash 8b1118fe683b574f24f8ee195ded89d8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserInput = {|
  password: string,
  email: string,
  firstName: string,
  lastName: string,
|};
export type LogInMutationInput = {|
  email: string,
  password: string,
  id?: ?string,
  clientMutationId?: ?string,
|};
export type CreateUserMutationVariables = {|
  input: CreateUserInput,
  login: LogInMutationInput,
|};
export type CreateUserMutationResponse = {|
  +createUser: ?{|
    +user: ?{|
      +id: string
    |}
  |},
  +login: ?{|
    +token: ?string,
    +user: ?{|
      +id: string,
      +email: string,
    |},
  |},
|};
export type CreateUserMutation = {|
  variables: CreateUserMutationVariables,
  response: CreateUserMutationResponse,
|};
*/


/*
mutation CreateUserMutation(
  $input: CreateUserInput!
  $login: LogInMutationInput!
) {
  createUser(input: $input) {
    user {
      id
    }
  }
  login(input: $login) {
    token
    user {
      id
      email
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateUserInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "login",
    "type": "LogInMutationInput!",
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
    "name": "createUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateUserMutation",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "UserNode",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "login",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "login"
      }
    ],
    "concreteType": "LogInMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateUserMutation",
    "id": null,
    "text": "mutation CreateUserMutation(\n  $input: CreateUserInput!\n  $login: LogInMutationInput!\n) {\n  createUser(input: $input) {\n    user {\n      id\n    }\n  }\n  login(input: $login) {\n    token\n    user {\n      id\n      email\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '74f05bfd18aa25e0793a7fa58773a7ef';
module.exports = node;
