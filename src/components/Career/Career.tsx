import React from 'react';
import Section from '../Section';
import type { CareerProps } from '../../interfaces/components';

const Career = ({ resume, referrals, ...others }: CareerProps): JSX.Element => (
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
              <dd className="bold">{duration}</dd>
              <dd>
                <ul className="bullet-list">
                  {positionHeld.map((position: string, index: number) => (
                    <li key={position}>{position}</li>
                  ))}
                </ul>
              </dd>
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
    <h4>{referrals.title}</h4>
    <dl data-testid="referral-list">
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
  </Section>
);

export default Career;
