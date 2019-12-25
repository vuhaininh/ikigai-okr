import React from 'react';
import logo from './logo.svg';
import './App.css';
import {

  EuiButtonIcon,EuiBadge

} from '@elastic/eui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload test heehe.
        </p>
        <EuiBadge color="primary" iconType="cross" iconSide="right">
            Primary 1
        </EuiBadge>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <EuiButtonIcon
          href="http://www.elastic.co"
          iconType="link"
          aria-label="This is a link"
        />
        </a>
      </header>
    </div>
  );
}

export default App;
