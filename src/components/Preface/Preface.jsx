import React from 'react';
import PropTypes from 'prop-types';

const Preface = ({ text }) => {
  return <div className="preface">{text}</div>;
};

Preface.propTypes = {
  text: PropTypes.string,
};

Preface.defaultProps = {
  text: '',
};

export default Preface;
