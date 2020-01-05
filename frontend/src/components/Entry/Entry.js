import React from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiBottomBar,
  EuiHeader,
  EuiPanel,
  EuiLink,
  EuiText,
} from '@elastic/eui';
import Login from './Login';
import IkigaiHeaderLogo from '../Common/IkigaiHeaderLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default () => (
  <div>
    <EuiHeader>
      <EuiPanel paddingSize="xs">
        <IkigaiHeaderLogo />
      </EuiPanel>
    </EuiHeader>
    <div className="entry__container">
      <EuiFlexGroup
        columns={2}
        direction="row"
        gutterSize="none"
        className="entry__body"
      >
        <EuiFlexItem grow={7}>
          <EuiText>
            <h2>
              <span className="ikigai--blue entry__message--title">
                We:
              </span>
            </h2>
          </EuiText>

          <EuiText>
            <h3>
              <span className="ikigai--blue ">
                <FontAwesomeIcon icon={['far', 'grin-beam']} />
                &nbsp; Enjoy a meaningful life
              </span>
            </h3>

            <h3>
              <span className="ikigai--blue">
                <FontAwesomeIcon icon={['fas', 'dove']} />
                &nbsp; Make our dreams come true
              </span>
            </h3>

            <h3>
              <span className="ikigai--blue ">
                <FontAwesomeIcon icon={['fas', 'dharmachakra']} />
                &nbsp; Become more persistent and successful
              </span>
            </h3>

            <h3>
              <span className="ikigai--blue ">
                <FontAwesomeIcon icon={['fas', 'user-friends']} />
                &nbsp; Connect to people by objectives and key results
              </span>
            </h3>

            <h3>
              <span className="ikigai--blue ">
                <FontAwesomeIcon
                  icon={[
                    'fas',
                    'american-sign-language-interpreting',
                  ]}
                />
                &nbsp; Share and celebrate happiness together
              </span>
            </h3>
          </EuiText>
        </EuiFlexItem>

        <EuiFlexItem grow={5}>
          <Login></Login>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
    <EuiBottomBar
      paddingSize="s"
      className="entry__bottom"
      alignItems="center"
    >
      <EuiFlexGroup
        justifyContent="spaceAround"
        gutterSize="none"
        className="entry__link-list"
      >
        <EuiFlexItem grow={false}>
          <EuiLink href="#">Terms of Service</EuiLink>
        </EuiFlexItem>
        <EuiFlexItem grow={false} className="col-xs-2">
          <EuiLink href="#">Privacy</EuiLink>
        </EuiFlexItem>
        <EuiFlexItem grow={false} className="col-xs-2">
          <EuiLink href="#">Contact</EuiLink>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiBottomBar>
  </div>
);
