import React from 'react';
import DocHead from './components/DocHead';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Career from './components/Career';
import content from './content.yml';

const { docTitle, blogUrl, header, footer, hero, ...rest } = content;
const { sections } = rest;

const App = () => (
  <>
    <DocHead title={docTitle} />
    <Header blogUrl={blogUrl} {...header} />
    <main>
      <Hero {...hero} />
      <About bio={sections.bio} skills={sections.skills} />
      <Projects {...sections.projects} />
      <Career {...sections.career} />
    </main>
    <Footer {...footer} />
  </>
);

export default App;
