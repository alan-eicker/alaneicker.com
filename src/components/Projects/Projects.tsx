import React from 'react';
import Section from '../Section';
import OtherProjects from '../OtherProjects';
import FeaturedProject from '../FeaturedProject';
import type { ProjectsProps } from '../../interfaces/components';

const Projects = ({
  title,
  featured,
  otherProjects,
}: ProjectsProps): JSX.Element => (
  <Section id="projects">
    <FeaturedProject
      sectionTitle={title}
      projectImage={featured.image}
      projectTitle={featured.title}
      projectSubtitle={featured.subtitle}
      projectUrls={featured.urls}
      projectDescription={featured.content}
    />

    <h4 className="text-align-center@medium" style={{ marginTop: 60 }}>
      {otherProjects.title}
    </h4>

    <OtherProjects items={otherProjects.items} />
  </Section>
);

export default Projects;
