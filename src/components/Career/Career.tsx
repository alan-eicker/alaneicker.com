import React from 'react';
import Section from '../Section';
import { CareerProps } from '../../types/components';

const Career: React.FC<CareerProps> = ({ resume, referrals, ...others }) => (
  <Section
    id="career"
    className="section--light-gray"
    {...others}
    sidebar={
      <>
        <h4>{resume.title}</h4>
        <dl>
          {resume.items.map(({ company, url, duration, positionHeld }) => (
            <React.Fragment key={company}>
              <dt className="bold">
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {company}
                  </a>
                ) : (
                  company
                )}
              </dt>
              <dd className="semibold">{duration}</dd>
              <dd>{positionHeld}</dd>
            </React.Fragment>
          ))}
        </dl>
        <a
          className="btn-link"
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
      <dl>
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
