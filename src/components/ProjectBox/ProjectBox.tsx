import React from 'react';
import { ProjectBoxProps } from '../../types/components';
import './ProjectBox.scss';

const ProjectBox = ({ title, description, url, techUsed }: ProjectBoxProps) => (
  <div key={title} className="project-box">
    <div className="project-box__head">
      <svg
        className="project-box__folder-icon"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.086 5.5l2.457 2.414 0.629 0.586h15.829v18h-28v-21h9.086zM12 3.5h-10c-1.105 0-2 0.896-2 2v21c0 1.105 0.895 2 2 2h28c1.105 0 2-0.895 2-2v-18c0-1.104-0.895-2-2-2h-15z"></path>
      </svg>
      <a
        className="project-box__link"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="view project in github"
      >
        <i className="devicon-github-original"></i>
      </a>
    </div>
    <div className="project-box__body">
      <h5 className="project-box__title">{title}</h5>
      <p>{description}</p>
    </div>
    <div className="project-box__footer">
      {techUsed.map((item: string) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  </div>
);

export default ProjectBox;
