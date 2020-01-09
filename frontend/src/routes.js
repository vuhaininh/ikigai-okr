import { makeRouteConfig, Route } from 'found';
import { graphql } from 'react-relay';
import { getUserId } from './utils';
import React from 'react';
import {
  TagList,
  CreateTag,
} from './components/compositions/Tags';

import { Entry } from './components/pages/Entry/';
import { Login } from './components/compositions/Login';
import { SignUp } from './components/compositions/SignUp';
import { Home } from './components/pages/Home';
import App from './App';

const TagListQuery = graphql`
  query routes_TagList_Query {
    allTags {
      ...TagList_tags
    }
  }
`;
const userId = getUserId();
const home = <Route Component={Home} />;
const entry = (
  <Route Component={Entry}>
    <Route Component={Login} />
    <Route path="signup" Component={SignUp} />
  </Route>
);
export default makeRouteConfig(
  <Route path="/" Component={App}>
    {userId ? home : entry}
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
