import React from 'react';

type Props = {
  copyright: string;
};

const Footer = ({ copyright }: Props) => (
  <footer className="footer">
    &copy;{' '}
    {copyright.replace('[copyrightYear]', String(new Date().getFullYear()))}
  </footer>
);

export default Footer;
