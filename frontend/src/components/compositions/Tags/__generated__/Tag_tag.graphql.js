/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Tag_tag$ref: FragmentReference;
declare export opaque type Tag_tag$fragmentType: Tag_tag$ref;
export type Tag_tag = {|
  +id: string,
  +name: string,
  +user: {|
    +email: string
  |},
  +$refType: Tag_tag$ref,
|};
export type Tag_tag$data = Tag_tag;
export type Tag_tag$key = {
  +$data?: Tag_tag$data,
  +$fragmentRefs: Tag_tag$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Tag_tag",
  "type": "TagNode",
  "metadata": null,
  "argumentDefinitions": [],
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c30304c9a56541524361c4ee66c29917';
module.exports = node;
