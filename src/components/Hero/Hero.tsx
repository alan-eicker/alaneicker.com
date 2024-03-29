import React from 'react';
import type { HeroProps } from '../../interfaces/components';
import Section from '../Section';
import './Hero.scss';

const Hero = ({ strapline, title, subtitle }: HeroProps): JSX.Element => (
  <Section className="hero">
    <h1 className="hero__strapline">{strapline}</h1>
    <h2 className="hero__title">{title}</h2>
    <h3 className="hero__subtitle">{subtitle}</h3>
  </Section>
);

export default Hero;
