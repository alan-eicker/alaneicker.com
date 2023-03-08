import React from 'react';
import Section from '../Section';

type Props = {
  title: string;
  emailAddress: string;
  phoneNumber: string;
  content: string;
};

const GetInTouch = ({
  title,
  emailAddress,
  phoneNumber,
  content,
  ...others
}: Props) => (
  <Section title={title} {...others}>
    <p>{content}</p>
    <p>
      <b>Phone:</b> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      <br />
      <b>Email:</b> <a href={`tel:${emailAddress}`}>{emailAddress}</a>
    </p>
  </Section>
);

export default GetInTouch;
