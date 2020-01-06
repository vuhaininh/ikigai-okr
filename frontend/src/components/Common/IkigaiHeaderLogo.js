import React from 'react';
import ikigaiLogo from '../../img/logo.svg';
import { EuiIcon } from '@elastic/eui';
import { Link } from 'found';
export default () => (
  <div className="ikigaiLogo--header ">
    <Link
      to="/"
      activeClassName="active"
      className="euiHeaderLogo"
      exact
    >
      <EuiIcon type={ikigaiLogo}></EuiIcon>
      <span className="header__title">
        <span className="ikigaiText--red">Ikigai </span>
        <span className="ikigaiText--blue">OKR</span>
      </span>
    </Link>
  </div>
);
