import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EuiText } from '@elastic/eui';
import { withTranslation } from 'react-i18next';
function Statement(props) {
  const { t } = props;
  return (
    <div>
      <EuiText>
        <h2>
          <span className="ikigai--blue entry__message--title">
            {t('entry-message.title')}
          </span>
        </h2>
      </EuiText>

      <EuiText>
        <h3>
          <span className="ikigai--blue ">
            <FontAwesomeIcon icon={['far', 'grin-beam']} />
            &nbsp; {t('entry-message.m1')}
          </span>
        </h3>

        <h3>
          <span className="ikigai--blue">
            <FontAwesomeIcon icon={['fas', 'dove']} />
            &nbsp; {t('entry-message.m2')}
          </span>
        </h3>

        <h3>
          <span className="ikigai--blue ">
            <FontAwesomeIcon icon={['fas', 'dharmachakra']} />
            &nbsp; {t('entry-message.m3')}
          </span>
        </h3>

        <h3>
          <span className="ikigai--blue ">
            <FontAwesomeIcon icon={['fas', 'user-friends']} />
            &nbsp; {t('entry-message.m4')}
          </span>
        </h3>

        <h3>
          <span className="ikigai--blue ">
            <FontAwesomeIcon
              icon={['fas', 'american-sign-language-interpreting']}
            />
            &nbsp; {t('entry-message.m5')}
          </span>
        </h3>
      </EuiText>
    </div>
  );
}
export default withTranslation()(Statement);
