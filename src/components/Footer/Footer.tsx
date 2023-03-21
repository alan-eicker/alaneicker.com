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
    name: string;
    url: string;
    icon: string;
  }[];
};

const Footer = ({ copyright, iconCredits, socialLinks }: Props) => (
  <footer className="footer">
    <IconList
      label="find me on the web at:"
      items={socialLinks}
      justify="center"
      size={28}
    />
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
