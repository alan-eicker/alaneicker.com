import * as React from 'react'
import * as classnames from 'classnames'
import * as PropTypes from 'prop-types'
import * as styles from './Logo.module.scss'

const Logo = ({ hasText = true, size = 'md' }) => (
  <div
    className={classnames(styles.logoWrapper, {
      [styles[size]]: size,
    })}
  >
    <div className={styles.logo}>
      <div />
    </div>
    {hasText && <div>Alan Eicker</div>}
  </div>
)

Logo.propTypes = {
  hasText: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

export default Logo
