import * as React from 'react'
import * as styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      &copy; {new Date().getFullYear()} Alan Eicker. All rights reserved.
    </div>
  </footer>
)

export default Footer
