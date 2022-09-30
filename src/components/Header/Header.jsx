import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle, nav }) => {
  const [activeLink, setActiveLink] = useState('about');

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__title">{title}</div>
        <div className="header__subtitle">{subtitle}</div>
      </div>
      <nav className="header__nav">
        <ul className="header__links">
          {nav.map((link) => {
            const linkText = link.replace('/#', '');
            return (
              <li key={link}>
                <a
                  className={activeLink === linkText ? 'is-active' : ''}
                  href={link}
                  onClick={() => setActiveLink(linkText)}
                >
                  {linkText}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

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
