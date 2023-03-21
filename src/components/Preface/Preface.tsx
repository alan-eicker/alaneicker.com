import React from 'react';
import { PrefaceProps } from '../../types/components';

const Preface = ({ text }: PrefaceProps) => {
  return (
    <div className="preface">
      <div className="preface__content">{text}</div>
    </div>
  );
};

export default Preface;
