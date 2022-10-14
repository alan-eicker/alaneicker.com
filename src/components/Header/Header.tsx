import React, { useState } from 'react';

type Props = {
  title: string;
  subtitle: string;
  nav: string[];
};

const Header = ({ title, subtitle, nav }: Props) => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <header className="header">
      <a
        className="header__logo"
        href="/#home"
        title={`${title} - ${subtitle}`}
        onClick={() => setActiveLink('')}
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
