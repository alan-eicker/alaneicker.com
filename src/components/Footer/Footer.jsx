import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ copyright }) => (
  <footer className="footer">
    &copy; {copyright.replace('[copyrightYear]', new Date().getFullYear())}
  </footer>
);

Footer.propTypes = {
  copyright: PropTypes.string,
};

Footer.defaultProps = {
  copyright: '',
};

export default Footer;
