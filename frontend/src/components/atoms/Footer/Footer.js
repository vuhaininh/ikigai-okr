import React, { Component } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiBottomBar,
  EuiLink,
} from '@elastic/eui';
import './Footer.scss';
import { withTranslation } from 'react-i18next';
class Footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <EuiBottomBar paddingSize="s" className="footer--entry">
        <EuiFlexGroup
          justifyContent="spaceAround"
          gutterSize="none"
          className="footer__link-list"
          alignItems="center"
        >
          <EuiFlexItem grow={false}>
            <EuiLink href="#">{t('bottom.terms-of-service')}</EuiLink>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiLink href="#">{t('bottom.privacy')}</EuiLink>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiLink href="#">{t('bottom.contact-us')}</EuiLink>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiBottomBar>
    );
  }
}

export default withTranslation()(Footer);
