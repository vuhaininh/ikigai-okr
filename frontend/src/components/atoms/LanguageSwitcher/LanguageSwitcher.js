import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import { EuiComboBox } from '@elastic/eui';
import './LanguageSwitcher.scss';
class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);
    const { t } = this.props;
    const selectLanguage = t('select-language');

    this.options = [
      {
        label: selectLanguage,
        value: 'en',
      },
      {
        label: 'English',
        value: 'en',
      },
      {
        label: 'Tiếng Việt',
        value: 'vi',
      },
    ];
    this.state = {
      selectedOptions: [this.options[0]],
    };
  }
  onChange = selectedOptions => {
    const { i18n } = this.props;
    // We should only get back either 0 or 1 options.
    this.setState({
      selectedOptions: selectedOptions,
    });
    const lng = selectedOptions[0].value;
    i18n.changeLanguage(lng);
  };
  render() {
    const { t } = this.props;
    const { selectedOptions } = this.state;
    return (
      <EuiComboBox
        placeholder={t('select-language')}
        singleSelection={{ asPlainText: true }}
        options={this.options}
        selectedOptions={selectedOptions}
        onChange={this.onChange}
        isClearable={false}
        className="languageSwitcher__selectBox"
      />
    );
  }
}

export default withTranslation()(LanguageSwitcher);
