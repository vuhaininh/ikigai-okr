import React, { Component } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiBottomBar,
  EuiLink,
} from '@elastic/eui';
import { withTranslation } from 'react-i18next';
class BottomBar extends Component {
  render() {
    const { t } = this.props;
    return (
      <EuiBottomBar paddingSize="s" className="entry__bottom">
        <EuiFlexGroup
          justifyContent="spaceAround"
          gutterSize="none"
          className="entry__link-list"
        >
          <EuiFlexItem grow={false}>
            <EuiLink href="#">{t('bottom.terms-of-service')}</EuiLink>
          </EuiFlexItem>
          <EuiFlexItem grow={false} className="col-xs-2">
            <EuiLink href="#">{t('bottom.privacy')}</EuiLink>
          </EuiFlexItem>
          <EuiFlexItem grow={false} className="col-xs-2">
            <EuiLink href="#">{t('bottom.contact-us')}</EuiLink>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiBottomBar>
    );
  }
}

export default withTranslation()(BottomBar);
