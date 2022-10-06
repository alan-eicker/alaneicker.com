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
    <div className="career">
      <p>{content}</p>
      <ul className="career__list">
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
