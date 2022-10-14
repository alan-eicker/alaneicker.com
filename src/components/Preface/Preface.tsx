import React from 'react';

type Props = {
  text: string;
};

const Preface = ({ text }: Props) => {
  return (
    <div className="preface">
      <div className="preface__content">{text}</div>
    </div>
  );
};

export default Preface;
