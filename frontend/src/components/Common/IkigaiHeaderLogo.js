import React from 'react';
import ikigaiLogo from '../../img/logo.svg';
import { EuiIcon } from '@elastic/eui';
export default () => (
  <div className="ikigaiLogo--header ">
    <a href="/" class="euiHeaderLogo">
      <EuiIcon type={ikigaiLogo}></EuiIcon>
      <span className="header__title">
        <span className="ikigaiText--red">Ikigai </span>
        <span className="ikigaiText--blue">OKR</span>
      </span>
    </a>
  </div>
);
