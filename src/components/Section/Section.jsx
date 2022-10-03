import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children, ...others }) => (
  <section className="section" {...others}>
    <h4 className="section__title">{title}</h4>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Section.defaultProps = {
  title: '',
  children: <></>,
};

export default Section;
