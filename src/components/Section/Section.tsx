import React from 'react';

type Props = {
  title: string;
  children: JSX.Element;
};

const Section = ({ title, children, ...others }: Props) => (
  <section className="section" {...others}>
    <h4 className="section__title">{title}</h4>
    {children}
  </section>
);

export default Section;
