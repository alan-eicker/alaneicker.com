import React from 'react';
import Section from '../Section';

type Props = {
  title: string;
  content: string;
};

const About = ({ title, content, ...others }: Props) => (
  <Section title={title} {...others}>
    <>
      {content.split('|').map((paragraph, idx) => (
        <p key={idx + 1}>{paragraph}</p>
      ))}
    </>
  </Section>
);

export default About;
