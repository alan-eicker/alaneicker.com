import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ strapline, title, text, subtitle }) => (
  <div className="hero">
    <div className="hero__content">
      <div className="hero__header">
        <h1 className="hero__strapline">{strapline}</h1>
        <h2 className="hero__title">{title}</h2>
        <h3 className="hero__subtitle">{subtitle}</h3>
      </div>
      <p className="hero__text">
        {text.replace('[years]', new Date().getFullYear() - 2007)}
      </p>
    </div>
  </div>
);

Hero.propTypes = {
  strapline: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
};

Hero.defaultProps = {
  strapline: '',
  strapline: '',
  subtitle: '',
  text: '',
};

export default Hero;
