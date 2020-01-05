import React from 'react';
import './App.css';
import './styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, far, fas);
function App({ children }) {
  return <div>{children}</div>;
}

export default App;
