import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';

const About = ({ title, content, ...others }) => (
  <Section title={title} {...others}>
    {content.split('|').map((paragraph) => (
      <p>{paragraph}</p>
    ))}
  </Section>
);

About.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

About.defaultProps = {
  title: '',
  content: '',
};

export default About;
