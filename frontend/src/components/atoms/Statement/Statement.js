import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EuiText } from '@elastic/eui';
import { withTranslation } from 'react-i18next';

function Statement(props) {
  const { t } = props;
  return (
    <div>
      <EuiText>
        <h2>{t('entry-message.title')}</h2>
      </EuiText>

      <EuiText>
        <h3>
          <FontAwesomeIcon icon={['far', 'grin-beam']} />
          &nbsp; {t('entry-message.m1')}
        </h3>

        <h3>
          <FontAwesomeIcon icon={['fas', 'dove']} />
          &nbsp; {t('entry-message.m2')}
        </h3>

        <h3>
          <FontAwesomeIcon icon={['fas', 'dharmachakra']} />
          &nbsp; {t('entry-message.m3')}
        </h3>

        <h3>
          <FontAwesomeIcon icon={['fas', 'user-friends']} />
          &nbsp; {t('entry-message.m4')}
        </h3>

        <h3>
          <FontAwesomeIcon
            icon={['fas', 'american-sign-language-interpreting']}
          />
          &nbsp; {t('entry-message.m5')}
        </h3>
      </EuiText>
    </div>
  );
}
export default withTranslation()(Statement);
