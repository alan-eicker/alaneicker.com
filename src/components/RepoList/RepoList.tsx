import React from 'react';

type Props = {
  excludes?: RegExp;
  items: {
    description: string;
    name: string;
    html_url: string;
  }[];
};

const RepoList = ({ excludes, items = [] }: Props) => (
  <div className="repo-list">
    {items
      .filter(({ name }) => !excludes?.test(name))
      .map(({ description, name, html_url }) => (
        <div className="repo-list__item" key={name}>
          <a
            className="repo-list__title"
            href={html_url}
            target="_back"
            rel="noopener noreferrer"
          >
            {name}
          </a>
          <p className="repo-list__description">{description}</p>
        </div>
      ))}
  </div>
);

export default RepoList;
