import React, { Component } from 'react';
import { EuiButtonEmpty } from '@elastic/eui';
import { withTranslation } from 'react-i18next';
import { IOK_USER_ID, IOK_AUTH_TOKEN } from '../../constants';
import { withRouter } from 'found';
class ControlBar extends Component {
  render() {
    const { t } = this.props;
    const userId = localStorage.getItem(IOK_USER_ID);

    return (
      <div>
        {userId ? (
          <EuiButtonEmpty
            className="mt1"
            onClick={() => {
              localStorage.removeItem(IOK_USER_ID);
              localStorage.removeItem(IOK_AUTH_TOKEN);
              this.props.router.replace('/');
            }}
          >
            {t('logout')}
          </EuiButtonEmpty>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default withTranslation()(withRouter(ControlBar));
