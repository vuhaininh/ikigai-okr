import React, { Component } from 'react';
import Tag from './Tag';
import { createFragmentContainer, graphql } from 'react-relay';
class TagList extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.tags.edges.map(({ node }) => (
          <Tag key={node.__id} tag={node} />
        ))}
      </div>
    );
  }
}

export default createFragmentContainer(TagList, {
  tags: graphql`
    fragment TagList_tags on TagNodeConnection {
      edges {
        node {
          ...Tag_tag
        }
      }
    }
  `,
});
