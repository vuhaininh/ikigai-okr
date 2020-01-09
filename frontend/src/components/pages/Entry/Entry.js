import React from 'react';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import Statement from '../../atoms/Statement/Statement';
import { HeaderEntry } from '../../compositions/Header';
import { Footer } from '../../atoms/Footer';
import './Entry.scss';
export default props => (
  <div>
    <HeaderEntry />

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

    <Footer />
  </div>
);
