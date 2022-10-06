import React from 'react';
import Section from '../Section';

type Props = {
  title: string;
  content: string;
  companies: {
    company: string;
    duration: string;
  }[];
};

const Career = ({ companies, title, content, ...others }: Props) => (
  <Section title={title} {...others}>
    <>
      <p>{content}</p>
      <ul>
        {companies.map(({ company, duration }) => (
          <li key={company}>
            <b>{company}:</b> {duration}
          </li>
        ))}
      </ul>
    </>
  </Section>
);

export default Career;
