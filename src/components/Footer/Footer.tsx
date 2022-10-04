import React from 'react';

type Props = {
  copyright: string;
  emailAddress: string;
  phoneNumber: string;
};

const Footer = ({ copyright, emailAddress = '', phoneNumber = '' }: Props) => (
  <footer className="footer">
    <span>
      &copy; {new Date().getFullYear()} {copyright} &bull;{' '}
      <a href={`mailto:${emailAddress}`}>{emailAddress}</a> &bull; {phoneNumber}
    </span>
  </footer>
);

export default Footer;
