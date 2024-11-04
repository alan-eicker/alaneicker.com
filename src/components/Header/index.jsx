import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Logo from '../Logo'
import content from '../../content/header.yaml'
import * as styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
    </Helmet>
    <Link to="/" className={styles.homeLink}>
      <Logo />
    </Link>
    <nav>
      <ul className={styles.mainNav}>
        {content?.links.map(link => {
          if (link === 'github') {
            return (
              <li>
                <Link
                  className={link === 'resume' && styles.isButtonLink}
                  to={content?.githubLink}
                  target="_blank"
                >
                  <i class="devicon-github-original"></i>
                </Link>
              </li>
            )
          }

          if (link === 'linkedin') {
            return (
              <li>
                <Link
                  className={link === 'resume' && styles.isButtonLink}
                  to={content?.linkedinLink}
                  target="_blank"
                >
                  <i class="devicon-linkedin-plain"></i>
                </Link>
              </li>
            )
          }

          return (
            <li>
              <Link
                className={link === 'resume' && styles.isButtonLink}
                to={`/${link}`}
              >
                {link === 'resume' ? <>Resum&eacute;</> : link}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  </header>
)

export default Header
