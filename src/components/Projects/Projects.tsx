import React from 'react';
import Section from '../Section';

type Props = {
  title: string;
  apiUrl: string;
};

const Projects = ({ apiUrl, title, ...others }: Props) => (
  <Section title={title} {...others}>
    <>github repos here...</>
  </Section>
);

export default Projects;
