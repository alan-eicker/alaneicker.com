import React from 'react';
import Section from '../Section';

type Props = {
  title: string;
  content: string;
  image: string;
};

const About = ({ image, title, content, ...others }: Props) => (
  <Section title={title} {...others}>
    <div className="about">
      <img className="about__bio-pic" src={image} alt="Alan Eicker" />
      {content.split('|').map((paragraph, idx) => (
        <p key={idx + 1}>
          {paragraph.replace(/@years/, String(new Date().getFullYear() - 2007))}
        </p>
      ))}
    </div>
  </Section>
);

export default About;
