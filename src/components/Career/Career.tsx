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
        <dl className="career-list">
          {resume.items.map(({ company, duration, positionHeld }) => (
            <React.Fragment key={company}>
              <dt className="bold">{company}</dt>
              <dd className="semibold">{duration}</dd>
              <dd>{positionHeld}</dd>
            </React.Fragment>
          ))}
        </dl>
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
      <dl className="career-list">
        {referrals.items.map(({ referee, jobTitle, content }) => (
          <React.Fragment key={referee}>
            <dt className="bold">{referee}</dt>
            <dd className="semibold">{jobTitle}</dd>
            <dd>
              <p>{content}</p>
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </>
  </Section>
);

export default Career;
