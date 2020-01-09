/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Tag_tag$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TagList_tags$ref: FragmentReference;
declare export opaque type TagList_tags$fragmentType: TagList_tags$ref;
export type TagList_tags = {|
  +edges: $ReadOnlyArray<?{|
    +node: ?{|
      +$fragmentRefs: Tag_tag$ref
    |}
  |}>,
  +$refType: TagList_tags$ref,
|};
export type TagList_tags$data = TagList_tags;
export type TagList_tags$key = {
  +$data?: TagList_tags$data,
  +$fragmentRefs: TagList_tags$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TagList_tags",
  "type": "TagNodeConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
              "kind": "FragmentSpread",
              "name": "Tag_tag",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '07c0380fc2c6cb3a10cc4eec17942831';
module.exports = node;
