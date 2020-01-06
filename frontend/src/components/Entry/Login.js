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

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <EuiText grow={false}>
          <h2>{t('login-title')}</h2>
        </EuiText>

        <EuiForm>
          <EuiFormRow label={t('login.email')}>
            <EuiFieldText
              name="email"
              icon="user"
              placeholder={t('login.enter-email')}
            />
          </EuiFormRow>
          <EuiFormRow label={t('login.password')}>
            <EuiFieldPassword
              placeholder={t('login.enter-password')}
              name="password"
            />
          </EuiFormRow>
          <EuiSpacer />
          <EuiFlexGroup justifyContent="spaceBetween" gutterSize="xl">
            <EuiFlexItem>
              <EuiButton type="submit" fill>
                {t('login.login')}
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem className="login__forgotpassword">
              <EuiText size="m">
                <EuiLink href="#">
                  {t('login.forgot-password')}
                </EuiLink>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiText size="m" className="login__signup">
            <span>{t('signup.call')}&nbsp;</span>

            <EuiLink href="/signup">{t('signup.signup')}</EuiLink>
          </EuiText>
        </EuiForm>
      </div>
    );
  }
}

export default withTranslation()(Login);
