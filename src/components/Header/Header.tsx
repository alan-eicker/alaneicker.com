import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import type { HeaderProps } from '../../interfaces/components';
import { useAppContext } from '../../AppProvider';
import './Header.scss';

const Header = ({ title, subtitle, nav }: HeaderProps): JSX.Element => {
  const [activeLink, setActiveLink] = useState('');
  const { nextSection } = useAppContext();

  useEffect(() => {
    setActiveLink(nextSection);
  }, [nextSection]);

  return (
    <header className="header">
      <a
        className="header__logo"
        href="/#home"
        title={`${title} - ${subtitle}`}
        onClick={() => setActiveLink('')}
      >
        <img src="./beard-purple.png" width="40" alt="logo" />
      </a>
      <nav className="header__nav">
        <ul className="header__links">
          {nav.map((link) => {
            const linkText = link.replace('/#', '');
            return (
              <li key={link}>
                <a
                  className={classnames({
                    'is-active': link === activeLink,
                  })}
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
