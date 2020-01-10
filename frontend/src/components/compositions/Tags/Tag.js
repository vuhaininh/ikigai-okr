import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
class Tag extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          {this.props.tag.name} - {this.props.tag.user.email}
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(Tag, {
  tag: graphql`
    fragment Tag_tag on TagNode {
      id
      name
      user {
        email
      }
    }
  `,
});
