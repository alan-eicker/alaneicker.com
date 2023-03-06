import React from 'react';

type Props = {
  copyright: string;
  emailAddress: string;
  phoneNumber: string;
  iconCredits: {
    websiteLinkUrl: string;
    websiteLinkText: string;
    iconUrl: string;
    iconName: string;
  };
};

const Footer = ({
  copyright,
  emailAddress,
  phoneNumber,
  iconCredits,
}: Props) => (
  <footer className="footer">
    <p>
      &copy; {new Date().getFullYear()} {copyright} &bull;{' '}
      <a href={`mailto:${emailAddress}`}>{emailAddress}</a> &bull; {phoneNumber}
    </p>
    <p>
      <a target="_blank" href={iconCredits.iconUrl} rel="noreferrer">
        {iconCredits.iconName}
      </a>{' '}
      icon by{' '}
      <a target="_blank" href={iconCredits.websiteLinkUrl} rel="noreferrer">
        {iconCredits.websiteLinkText}
      </a>
    </p>
  </footer>
);

export default Footer;
