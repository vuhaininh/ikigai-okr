import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';
import TagList from './TagList';
const TagListPageQuery = graphql`
  query TagListPageQuery {
    allTags {
      ...TagList_tags
    }
  }
`;
class TagListPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={TagListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <TagList tags={props.allTags} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default TagListPage;
