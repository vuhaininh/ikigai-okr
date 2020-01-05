import React, { Component } from 'react';
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
    return (
      <div>
        <EuiText grow={false} textAlign="center">
          <h2>Follow our goals right now</h2>
        </EuiText>

        <EuiForm>
          <EuiFormRow label="Email">
            <EuiFieldText
              name="email"
              icon="user"
              placeholder="Enter your email"
            />
          </EuiFormRow>
          <EuiFormRow label="Password">
            <EuiFieldPassword
              placeholder="Enter your password"
              name="password"
            />
          </EuiFormRow>
          <EuiSpacer />
          <EuiFlexGroup justifyContent="spaceBetween" gutterSize="xl">
            <EuiFlexItem>
              <EuiButton type="submit" fill>
                Log in
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem className="login__forgotpassword">
              <EuiText size="m">
                <EuiLink href="#">Forgot password?</EuiLink>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiText
            size="m"
            className="login__signup"
            textAlign="center"
          >
            <span>Join Ikigai OKR today&nbsp;</span>

            <EuiLink href="#">Signup</EuiLink>
          </EuiText>
        </EuiForm>
      </div>
    );
  }
}

export default Login;
