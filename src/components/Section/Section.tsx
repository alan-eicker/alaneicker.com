import React from 'react';

type Props = {
  className: string;
  title: string;
  children: JSX.Element;
};

const Section = ({ className, title, children, ...others }: Props) => (
  <section className={`section ${className}`} {...others}>
    <h4 className="section__title">
      <span className="section__title-text">{title}</span>
    </h4>
    {children}
  </section>
);

export default Section;
