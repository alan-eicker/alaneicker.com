import React from 'react';
import classnames from 'classnames';
import { IconListProps } from '../../types/components';

const IconList = ({ label, items, justify, size }: IconListProps) => (
  <>
    {label && <p className="screenreader-only">{label}</p>}
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
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <i
                className={item.icon}
                aria-hidden="true"
                style={{ fontSize: size }}
              />
              <span className="screenreader-only">{item.name}</span>
            </a>
          ) : (
            <>
              <i
                className={item.icon}
                aria-hidden="true"
                style={{ fontSize: size }}
              />
              <span className="screenreader-only">{item.name}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  </>
);

export default IconList;
