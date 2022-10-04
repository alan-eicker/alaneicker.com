import React from 'react';

type Props = {
  title: string;
  children: JSX.Element;
};

const Section = ({ title, children, ...others }: Props) => (
  <section className="section" {...others}>
    <h4 className="section__title">
      <span className="section__title-text">{title}</span>
    </h4>
    {children}
  </section>
);

export default Section;
