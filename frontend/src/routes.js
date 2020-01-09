import { makeRouteConfig, Route } from 'found';
import { graphql } from 'react-relay';
import React from 'react';
import TagList from './components/Tag/TagList';
import CreateTag from './components/Tag/CreateTag';
import { Entry } from './components/pages/Entry/';
import { Login } from './components/compositions/Login';
import { SignUp } from './components/compositions/SignUp';
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
    <Route Component={Entry}>
      <Route Component={Login} />
      <Route path="signup" Component={SignUp} />
    </Route>
    <Route
      path="tags"
      Component={TagList}
      query={TagListQuery}
      render={({ props }) =>
        props ? <TagList tags={props.allTags} /> : <div />
      }
    />
    <Route path="create-tag" Component={CreateTag}></Route>
  </Route>,
);
