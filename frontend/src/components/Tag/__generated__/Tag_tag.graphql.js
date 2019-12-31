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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '68cb2c97bc926cf9c05b4327ab5a21d7';
module.exports = node;
