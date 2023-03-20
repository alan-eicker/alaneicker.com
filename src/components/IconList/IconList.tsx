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
      'icon-list--custom-font-size': size,
    })}
  >
    {items.map((item) => (
      <li key={item.name}>
        <i
          className={item.icon}
          aria-label={item.name}
          style={{ fontSize: size }}
        />
      </li>
    ))}
  </ul>
);

export default IconList;
