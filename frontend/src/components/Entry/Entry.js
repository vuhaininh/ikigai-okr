import React from 'react';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import Statement from './Statement';
import HeaderBar from '../Header/HeaderBar';
import BottomBar from '../Bottom/BottomBar';
export default props => (
  <div>
    <HeaderBar />
    <div className="entry__container">
      <EuiFlexGroup
        columns={2}
        direction="row"
        gutterSize="none"
        className="entry__body"
      >
        <EuiFlexItem grow={6}>
          <Statement />
        </EuiFlexItem>

        <EuiFlexItem grow={4}>{props.children}</EuiFlexItem>
      </EuiFlexGroup>
    </div>
    <BottomBar />
  </div>
);
