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
} from '@elastic/eui';
import { IOK_USER_ID, IOK_AUTH_TOKEN } from '../../constants';
import CreateUserMutation from '../../mutations/CreateUserMutation';
import { withRouter } from 'found';
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    showErrors: false,
  };
  render() {
    const { t } = this.props;
    return (
      <div>
        <EuiText grow={false}>
          <h2>{t('signup.register')}</h2>
        </EuiText>
        <EuiForm>
          <form
            onSubmit={e => {
              e.preventDefault();
              this._signUp();
            }}
          >
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFormRow label={t('signup.first-name')}>
                  <EuiFieldText
                    value={this.state.firstName}
                    onChange={e => {
                      this.setState({ firstName: e.target.value });
                    }}
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFormRow label={t('signup.last-name')}>
                  <EuiFieldText
                    value={this.state.lastName}
                    onChange={e => {
                      this.setState({ lastName: e.target.value });
                    }}
                  />
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFormRow label={t('login.email')}>
                  <EuiFieldText
                    name="email"
                    icon="user"
                    value={this.state.email}
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiFormRow label={t('login.password')}>
                  <EuiFieldPassword
                    value={this.state.password}
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
            <EuiFlexGroup
              justifyContent="spaceBetween"
              gutterSize="xl"
            >
              <EuiFlexItem>
                <EuiButton type="submit" fill>
                  {t('signup.signup')}
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </form>
        </EuiForm>
      </div>
    );
  }
  _toggleError = isShow => {
    this.setState({
      showErrors: isShow,
    });
  };

  _signUp = () => {
    CreateUserMutation(this.state, (id, token, errMessage) => {
      if (errMessage == null) {
        this._saveUserData(id, token);
        this._toggleError(false);
        this.props.router.replace('/');
      } else {
        this._toggleError(true);
      }
    });
  };
  _saveUserData = (id, token) => {
    localStorage.setItem(IOK_USER_ID, id);
    localStorage.setItem(IOK_AUTH_TOKEN, token);
  };
}

export default withTranslation()(withRouter(SignUp));
