import * as React from 'react'
import * as styles from './Logo.module.scss'

const Logo = ({ hasText = true }) => (
  <div className={styles.logoWrapper}>
    <div className={styles.logo}>
      <div />
    </div>
    {hasText && <div>Alan Eicker</div>}
  </div>
)

export default Logo
