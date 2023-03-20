import React from 'react';
import Section from '../Section';
import IconList from '../IconList';

type Props = {
  bio: {
    title: string;
    content: string;
  };
  skills: {
    title: string;
    items: {
      name: string;
      icon: string;
    }[];
  }[];
};

const About = ({ bio, skills }: Props) => (
  <Section
    id="about"
    className="section--purple section--top-rounded"
    sidebar={
      <>
        <h4 className="text-align-center@medium">{skills.title}</h4>
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
