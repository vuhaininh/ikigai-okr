import { makeRouteConfig, Route } from 'found';
import { graphql } from 'react-relay';
import React from 'react';
import TagList from './components/Tag/TagList';
import CreateTag from './components/Tag/CreateTag';
import App from './App';
const TagListQuery = graphql`
  query routes_TagList_Query {
    allTags {
      ...TagList_tags
    }
  }
`;

export default makeRouteConfig(
  <Route path="/" Component={App}>
    <Route
      Component={TagList}
      query={TagListQuery}
      render={({ props }) =>
        props ? <TagList tags={props.allTags} /> : <div />
      }
    />
    <Route path="/create-tag" Component={CreateTag}></Route>
  </Route>,
);
