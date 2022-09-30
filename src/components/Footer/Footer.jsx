import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ copyright }) => (
  <footer
    className="footer"
    dangerouslySetInnerHTML={{
      __html: copyright.replace(
        '[copyrightYear]',
        `&copy; ${new Date().getFullYear()}`,
      ),
    }}
  ></footer>
);

Footer.propTypes = {
  copyright: PropTypes.string,
};

Footer.defaultProps = {
  copyright: '',
};

export default Footer;
