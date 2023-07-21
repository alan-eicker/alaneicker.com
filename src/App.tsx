import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine, Container } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import DocHead from './components/DocHead';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Career from './components/Career';
import content from './content.yaml';
import particlesConfig from './configs/particles';

const { docTitle, blogUrl, header, footer, hero, ...rest } = content;
const { sections } = rest;

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log('container', container);
    },
    [],
  );

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
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
};

export default App;
