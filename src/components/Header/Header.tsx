import React, { useState } from 'react';

type Props = {
  title?: string;
  subtitle?: string;
  nav?: string[];
};

const Header = ({ title, subtitle, nav = [] }: Props) => {
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

export default Header;
