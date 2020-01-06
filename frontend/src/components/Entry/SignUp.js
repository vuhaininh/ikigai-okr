import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import {
  EuiFieldPassword,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiText,
  EuiSpacer,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
} from '@elastic/eui';
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { t } = this.props;
    return (
      <div>
        <EuiText grow={false}>
          <h2>{t('signup.register')}</h2>
        </EuiText>
        <EuiForm>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiFormRow label={t('signup.first-name')}>
                <EuiFieldText />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFormRow label={t('signup.last-name')}>
                <EuiFieldText />
              </EuiFormRow>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiFormRow label={t('login.email')}>
                <EuiFieldText name="email" icon="user" />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFormRow label={t('login.password')}>
                <EuiFieldPassword fill />
              </EuiFormRow>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiFlexGroup justifyContent="spaceBetween" gutterSize="xl">
            <EuiFlexItem>
              <EuiButton type="submit" fill>
                {t('signup.signup')}
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiForm>
      </div>
    );
  }
}

export default withTranslation()(SignUp);
