import React from 'react';

type Props = {
  description: string;
  icon?: {
    viewBox: string;
    fill: string;
    path: string;
    title: string;
  };
  url: string;
  urlText: string;
  title: string;
};

const FeaturedProject = ({ description, icon, title, url, urlText }: Props) => (
  <div className="featured-project">
    {icon && (
      <div className="featured-project__head">
        <svg
          className="featured-project__icon"
          aria-hidden="true"
          viewBox={icon.viewBox}
          enableBackground={`new ${icon.viewBox}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{icon.title}</title>
          <path d={icon.path} fill={icon.fill} />
        </svg>
      </div>
    )}
    <div className="featured-project__body">
      <h5 className="featured-project__title">{title}</h5>
      <p className="featured-project__description">{description}</p>
      <a
        className="featured-project__link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {urlText}
      </a>
    </div>
  </div>
);

export default FeaturedProject;
