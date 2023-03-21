import React from 'react';
import Section from '../Section';

type Props = {
  resume: {
    title: string;
    resumeDownloadUrl: string;
    items: {
      company: string;
      duration: string;
      positionHeld: string;
    }[];
  };
  referrals: {
    title: string;
    items: {
      referee: string;
      jobTitle: string;
      content: string;
    }[];
  };
};

const Career = ({ resume, referrals, ...others }: Props) => (
  <Section
    id="career"
    className="section--light-gray"
    {...others}
    sidebar={
      <>
        <h4>{resume.title}</h4>
        <ul className="career-list">
          {resume.items.map(({ company, duration, positionHeld }) => (
            <li key={company}>
              <h5 className="no-margin">{company}</h5>
              <h6 className="semibold no-margin">{duration}</h6>
              {positionHeld}
            </li>
          ))}
        </ul>
        <a
          className="btn-link btn-link--magenta"
          href={resume.resumeDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View my Resum&eacute;
        </a>
      </>
    }
  >
    <>
      <h4>{referrals.title}</h4>
      <ul className="career-list">
        {referrals.items.map(({ referee, jobTitle, content }) => (
          <li key={referee}>
            <h5 className="no-margin">{referee}</h5>
            <h6 className="semibold no-margin">{jobTitle}</h6>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  </Section>
);

export default Career;
