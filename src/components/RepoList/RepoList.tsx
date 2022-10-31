import React from 'react';

type Props = {
  excludes?: RegExp;
  items: {
    description: string;
    name: string;
    html_url: string;
  }[];
};

const RepoList = ({ excludes, items }: Props) => (
  <ul className="repo-list">
    {items
      .filter(({ name }) => !excludes?.test(name))
      .map(({ description, name, html_url }) => (
        <li className="repo-list__item" key={name}>
          <a
            className="repo-list__title"
            href={html_url}
            target="_back"
            rel="noopener noreferrer"
          >
            {name}
          </a>
          <p className="repo-list__description">{description}</p>
        </li>
      ))}
  </ul>
);

export default RepoList;
