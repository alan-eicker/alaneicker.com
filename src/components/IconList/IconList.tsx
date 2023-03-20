import React from 'react';

type Props = {
  justify: 'center' | 'end' | 'between' | 'around';
  items: {
    name: string;
    icon: string;
  }[];
};

const IconList = ({ items, justify }: Props) => (
  <ul className={`icon-list ${justify ? `icon-list--${justify}` : ''}`}>
    {items.map((item) => (
      <li key={item.name}>
        <i className={item.icon} aria-label={item.name} />
      </li>
    ))}
  </ul>
);

export default IconList;
