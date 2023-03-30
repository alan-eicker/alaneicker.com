import React, { useState } from 'react';
import classnames from 'classnames';
import { HeaderProps } from '../../types/components';
import { useAppContext } from '../../AppProvider';

const Header = ({ title, subtitle, nav, blogUrl }: HeaderProps) => {
  const [activeLink, setActiveLink] = useState('');
  const { headerClass } = useAppContext();

  console.log(headerClass);

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
                    'is-active':
                      link === activeLink ||
                      headerClass.replace('header--', '') === linkText,
                  })}
                  href={link}
                  onClick={() => setActiveLink(link)}
                >
                  {linkText}
                </a>
              </li>
            );
          })}
          {blogUrl && (
            <li>
              <a href={blogUrl.url} target="_blank" rel="noopener noreferrer">
                {blogUrl.name}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
