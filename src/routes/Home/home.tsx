import React from 'react';
import content from '../../content.yaml';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Career from '../../components/Career';

const { hero, sections } = content;

const Home = () => (
  <>
    <Hero {...hero} />
    <About bio={sections.bio} skills={sections.skills} />
    <Projects {...sections.projects} />
    <Career {...sections.career} />
  </>
);

export default Home;
