import React from 'react';
import Section from '../Section';

type Props = {
  title: string;
  content: string;
  companies: string[];
};

const Career = ({ companies, title, content, ...others }: Props) => (
  <Section title={title} {...others}>
    <>
      <p>{content}</p>
      <ul>
        {companies.map((company) => (
          <li key={company}>{company}</li>
        ))}
      </ul>
    </>
  </Section>
);

export default Career;
