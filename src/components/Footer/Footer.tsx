import React from 'react';
import IconList from '../IconList';

type Props = {
  copyright: string;
  iconCredits: {
    websiteLinkUrl: string;
    websiteLinkText: string;
    iconUrl: string;
    iconName: string;
  };
  socialLinks: {
    title: string;
    url: string;
    icon: string;
  }[];
};

const Footer = ({ copyright, iconCredits, socialLinks }: Props) => (
  <footer className="footer">
    <IconList items={socialLinks} justify="center" />
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
