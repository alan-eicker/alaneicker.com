import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../Section';
import RepoList from '../RepoList';
import FeaturedProject from '../FeaturedProject';

type Props = {
  title: string;
  apiUrl: string;
  projects: {
    description: string;
    title: string;
    url: string;
    urlText: string;
    image: string;
  }[];
};

const Projects = ({ apiUrl, projects, title, ...others }: Props) => (
  <Section className="top-margin-mobile" title={title} {...others}>
    <div className="projects">
      {projects.map(
        ({ title: projectTile, image, description, url, urlText }) => (
          <div className="projects__card" key={projectTile}>
            <div className="projects__card__bd">
              <h3 className="projects__card__title">{projectTile}</h3>
              <p>{description}</p>
              <p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {urlText}
                </a>
              </p>
            </div>
            <div className="projects__card__ft">
              <img
                className="projects__card__img"
                src={image}
                alt={`${title} screenshot`}
              />
            </div>
          </div>
        ),
      )}
    </div>
  </Section>
);

export default Projects;
