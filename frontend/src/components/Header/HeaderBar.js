import React, { Component } from 'react';
import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderBreadcrumbs,
} from '@elastic/eui';
import IkigaiHeaderLogo from '../Common/IkigaiHeaderLogo';
import LanguageBar from '../Settings/LanguageBar';
import ControlBar from './ControlBar';
class HeaderBar extends Component {
  constructor(props) {
    super(props);
  }

  renderBreadcrumbs() {
    const breadcrumbs = [{ text: '' }];

    return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
  }

  render() {
    return (
      <EuiHeader>
        <EuiHeaderSection>
          <EuiHeaderSectionItem>
            <IkigaiHeaderLogo />
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
        {this.renderBreadcrumbs()}
        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem border="none">
            <ControlBar />
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem border="none">
            <LanguageBar />
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
    );
  }
}

export default HeaderBar;
