import React from 'react';
import Section from '../Section';

type Props = {
  title: string;
  featured: {
    title: string;
    subtitle: string;
    url: string;
    urlText: string;
    image: string;
  }[];
};

const Projects = ({ title, featured }: Props) => (
  <Section
    id="projects"
    cols={[4, 7]}
    className="top-margin-mobile"
    sidebar={
      <>
        <h4>{title}</h4>
        <h5 className="no-margin">{featured.title}</h5>
        <h6 className="no-margin">{featured.subtitle}</h6>
        <p>{featured.content}</p>
        <p>
          <a
            className="btn-link btn-link--magenta"
            href={featured.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {featured.urlText}
          </a>
        </p>
      </>
    }
  >
    <img
      className="has-shadow"
      src={featured.image}
      alt="atomikui screenshot"
      width="100%"
    />
  </Section>
);

export default Projects;
