import * as React from 'react'

import Logo from '../Logo'
import * as styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerLogo}>
        <Logo hasText={false} />
      </div>
      &copy; {new Date().getFullYear()} Alan Eicker. All rights reserved.
    </div>
  </footer>
)

export default Footer
