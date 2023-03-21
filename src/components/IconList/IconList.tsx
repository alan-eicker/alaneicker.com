import React from 'react';
import classnames from 'classnames';

type Props = {
  justify: 'center' | 'end' | 'between' | 'around';
  items: {
    name: string;
    icon: string;
  }[];
  size: number;
};

const IconList = ({ items, justify, size }: Props) => (
  <ul
    className={classnames('icon-list', {
      [`icon-list--${justify}`]: justify,
    })}
  >
    {items.map((item) => (
      <li
        key={item.icon}
        className={classnames({
          'icon-list--custom-font-size': size,
        })}
      >
        <i
          className={item.icon}
          aria-hidden="true"
          style={{ fontSize: size }}
        />
        <span className="screenreader-only">{item.name}</span>
      </li>
    ))}
  </ul>
);

export default IconList;
