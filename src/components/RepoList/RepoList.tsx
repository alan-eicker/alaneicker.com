import React from 'react';

type Props = {
  excludes?: RegExp | null;
  items: {
    description: string;
    name: string;
    html_url: string;
  }[];
};

const RepoList = ({ excludes = null, items }: Props) => (
  <ul className="repo-list">
    {items
      .filter(({ name }) => !excludes?.test(name))
      .map(({ description, name, html_url: homeUrl }) => (
        <li className="repo-list__item" key={name}>
          <a
            className="repo-list__title"
            href={homeUrl}
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
