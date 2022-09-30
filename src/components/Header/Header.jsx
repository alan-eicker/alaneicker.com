import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle, nav }) => (
  <header className="header">
    <div className="header__logo">
      <div className="header__title">{title}</div>
      <div className="header__subtitle">{subtitle}</div>
    </div>
    <nav className="header__nav">
      <ul className="header__links">
        {nav.map((link) => (
          <li key={link}>
            <a href={link}>{link.replace('/#', '')}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  nav: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
  title: '',
  subtitle: '',
  nav: [],
};

export default Header;
