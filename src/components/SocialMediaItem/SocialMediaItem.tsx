import React from 'react';

type Props = {
  title: string;
  url: string;
  path: string;
  viewBox: string;
  fill: string;
  height: string;
  width: string;
};

const SocialMediaItem = ({
  title,
  url,
  path,
  viewBox,
  fill,
  height,
  width,
}: Props) => (
  <div className="social-media-item">
    <a
      className="social-media-item__link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <svg
        aria-hidden="true"
        className="margin-top-4"
        fill={fill}
        height={height}
        width={width}
        viewBox={viewBox}
        enableBackground={`new ${viewBox}`}
        xmlns="https://www.w3.org/2000/svg"
      >
        <path d={path} />
      </svg>
      <div>{title}</div>
    </a>
  </div>
);

export default SocialMediaItem;
