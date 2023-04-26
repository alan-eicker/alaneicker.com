import React from 'react';
import Section from '../Section';
import IconList from '../IconList';
import { AboutProps } from '../../interfaces/components';

const About: React.FC<AboutProps> = ({ bio, skills }) => (
  <Section
    id="about"
    sidebar={
      <>
        <h4>{skills.title}</h4>
        <IconList items={skills.items} />
      </>
    }
  >
    <h4>{bio.title}</h4>
    {bio.content.split('|').map((paragraph, idx) => (
      <p key={idx + 1}>
        {paragraph.replace(/@years/, String(new Date().getFullYear() - 2007))}
      </p>
    ))}
  </Section>
);

export default About;
