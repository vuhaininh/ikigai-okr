import React from 'react';
import './App.css';
import { Link } from 'found';
import {
  EuiHeader,
  EuiHeaderLinks,
  EuiHeaderLink,
} from '@elastic/eui';
function App({ children }) {
  return (
    <div>
      <EuiHeader>
        <EuiHeaderLinks>
          <EuiHeaderLink>
            <Link to="/" activeClassName="active" exact>
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
      {children}
    </div>
  );
}

export default App;
