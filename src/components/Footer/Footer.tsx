import React from 'react';
import IconList from '../IconList';
import { FooterProps } from '../../types/components';

const Footer = ({
  copyright,
  contactInfo,
  iconCredits,
  socialLinks,
}: FooterProps) => (
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
