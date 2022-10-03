import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle, nav }) => {
  const [activeLink, setActiveLink] = useState('about');

  return (
    <header className="header">
      <a
        className="header__logo"
        href="/#home"
        title={`${title} - ${subtitle}`}
      >
        <span>A</span>
      </a>
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
