import React from 'react';
import './App.css';
import TagListPage from './components/TagListPage';
import CreateTag from './components/CreateTag';
import { EuiFlexGrid, EuiFlexItem } from '@elastic/eui';

function App() {
  return (
    <div>
      <CreateTag />
      <TagListPage />
    </div>
  );
}

export default App;
