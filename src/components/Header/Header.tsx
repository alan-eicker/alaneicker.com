import React, { useState } from 'react';
import { HeaderProps } from '../../types/components';

const Header = ({ title, subtitle, nav, logoImg }: HeaderProps) => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <header className="header">
      <a
        className="header__logo"
        href="/#home"
        title={`${title} - ${subtitle}`}
        onClick={() => setActiveLink('')}
      >
        <img src={logoImg} width="40" alt="logo" />
      </a>
      <nav className="header__nav">
        <ul className="header__links">
          {nav.map((link) => {
            const linkText = link.replace('/#', '');
            return (
              <li key={link}>
                <a
                  className={link === activeLink ? 'is-active' : ''}
                  href={link}
                  onClick={() => setActiveLink(link)}
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

export default Header;
