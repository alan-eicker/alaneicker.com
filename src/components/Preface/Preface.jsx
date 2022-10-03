import React from 'react';
import PropTypes from 'prop-types';

const Preface = ({ text }) => {
  return (
    <div className="preface">
      <div className="preface__content">{text}</div>
    </div>
  );
};

Preface.propTypes = {
  text: PropTypes.string,
};

Preface.defaultProps = {
  text: '',
};

export default Preface;
