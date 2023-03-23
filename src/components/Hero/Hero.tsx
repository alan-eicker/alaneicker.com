import React from 'react';
import Preface from '../Preface';
import { HeroProps } from '../../types/components';

const Hero = ({ strapline, title, text, subtitle }: HeroProps) => (
  <div
    id="home"
    className="hero"
    style={{ backgroundImage: 'url(./developer.svg)' }}
  >
    <div className="hero__content">
      <div className="hero__header">
        <h1 className="hero__strapline">{strapline}</h1>
        <h2 className="hero__title">{title}</h2>
        <h3 className="hero__subtitle">{subtitle}</h3>
      </div>
    </div>
  </div>
);

export default Hero;
