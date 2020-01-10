import React, { Component } from 'react';
import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderBreadcrumbs,
} from '@elastic/eui';
import { BlackLogo } from '../../atoms/HeaderLogo';
import { LanguageSwitcher } from '../../atoms/LanguageSwitcher';
import { LogOut } from '../../atoms/LogOut';
class HeaderEntry extends Component {
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
            <BlackLogo />
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
        {this.renderBreadcrumbs()}
        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem border="none">
            <LogOut />
          </EuiHeaderSectionItem>
          <EuiHeaderSectionItem border="none">
            <LanguageSwitcher />
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
    );
  }
}

export default HeaderEntry;
