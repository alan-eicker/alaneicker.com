import React from 'react';
import Section from '../Section';
import OtherProjects from '../OtherProjects';
import FeaturedProject from '../FeaturedProject';
import { ProjectsProps } from '../../interfaces/components';

const Projects: React.FC<ProjectsProps> = ({
  title,
  featured,
  otherProjects,
}) => (
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
