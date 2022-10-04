import React from 'react';
import Section from '../Section';

type Props = {
  title: string;
  content: string;
};

const About = ({ title, content, ...others }: Props) => (
  <Section title={title} {...others}>
    <>
      {content.split('|').map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </>
  </Section>
);

export default About;
