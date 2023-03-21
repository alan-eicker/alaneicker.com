import React from 'react';
import IconList from '../IconList';

type Props = {
  copyright: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  iconCredits: {
    websiteLinkUrl: string;
    websiteLinkText: string;
    iconUrl: string;
    iconName: string;
  };
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
};

const Footer = ({
  copyright,
  contactInfo,
  iconCredits,
  socialLinks,
}: Props) => (
  <footer className="footer">
    <IconList
      label="find me on the web at"
      items={socialLinks}
      justify="center"
      size={28}
    />
    <p>
      Call me at <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a> or
      email me at{' '}
      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
    </p>
    <p>
      &copy; {new Date().getFullYear()} {copyright}
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
