import React from 'react';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { HeaderHome } from '../../compositions/Header';

import './Home.scss';
export default props => (
  <div>
    <HeaderHome />
    <EuiFlexGroup
      columns={2}
      direction="row"
      gutterSize="none"
      className="entry__body"
    >
      abcxyz
    </EuiFlexGroup>
  </div>
);
