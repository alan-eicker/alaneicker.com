import * as React from 'react'
import PropTypes from 'prop-types'

import * as styles from './ButtonGrid.module.scss'

const ButtonGrid = ({ items = [], onClick = () => {} }) => {
  return (
    <div className={styles.grid}>
      {items.map(item => (
        <button
          className={styles.button}
          aria-label={item.name}
          key={item.name}
          onClick={() => onClick(item)}
        >
          <i class={item.icon} />
        </button>
      ))}
    </div>
  )
}

ButtonGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
}

export default ButtonGrid
