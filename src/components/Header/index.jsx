import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo'
import content from '../../content/header.yaml'
import * as styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <Link to="/" className={styles.homeLink}>
      <Logo />
      <span>Alan Eicker</span>
    </Link>
    <nav>
      <ul className={styles.mainNav}>
        {content.links.map(link => (
          <li>
            <Link
              className={link === 'resume' && styles.isButtonLink}
              to={`/${link}`}
            >
              {link === 'resume' ? <>Resum&eacute;</> : link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header
