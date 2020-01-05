import React, { Component } from 'react';
import Tag from './Tag';
import { createFragmentContainer, graphql } from 'react-relay';
import {
  EuiHeader,
  EuiHeaderLinks,
  EuiHeaderLink,
} from '@elastic/eui';
import { Link } from 'found';
class TagList extends Component {
  state = {};
  render() {
    return (
      <div>
        <EuiHeader>
          <EuiHeaderLinks>
            <EuiHeaderLink>
              <Link to="/" activeClassName="active" exact>
                Home
              </Link>
            </EuiHeaderLink>
            <EuiHeaderLink>
              <Link to="/tags" activeClassName="active" exact>
                All Tags
              </Link>
            </EuiHeaderLink>
            <EuiHeaderLink>
              <Link to="/create-tag" activeClassName="active">
                Create Tag
              </Link>
            </EuiHeaderLink>
          </EuiHeaderLinks>
        </EuiHeader>
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
