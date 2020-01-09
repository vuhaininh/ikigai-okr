import React, { Component } from 'react';
import { EuiButtonEmpty } from '@elastic/eui';
import { withTranslation } from 'react-i18next';
import { getUserId, signOut } from '../../../utils';
import { withRouter } from 'found';
class LogOut extends Component {
  render() {
    const { t } = this.props;
    const userId = getUserId();

    return (
      <div>
        {userId ? (
          <EuiButtonEmpty
            className="mt1"
            onClick={() => {
              signOut();
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

export default withTranslation()(withRouter(LogOut));
