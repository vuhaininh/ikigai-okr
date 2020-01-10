import React from 'react';
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { HeaderHome } from '../../compositions/Header';
import { getToken, getUserId } from '../../../utils';
import { TagListPage } from '../../compositions/Tags';
import './Home.scss';
export default props => {
  const fakeID = 'VXNlck5vZGU6MjU=';
  return (
    <div>
      <HeaderHome />
      {getToken()} <br />
      {getUserId()} <br />
      <EuiFlexGroup
        columns={2}
        direction="row"
        gutterSize="none"
        className="entry__body"
      >
        <TagListPage />
      </EuiFlexGroup>
    </div>
  );
};
