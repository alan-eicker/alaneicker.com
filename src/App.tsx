import React, { useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { Engine, Container } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import DocHead from './components/DocHead';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import Blog from './routes/Blog';
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
      //await console.log('container', container);
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
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<Blog />} />
          </Routes>
        </main>
      </Router>
      <Footer {...footer} />
    </>
  );
};

export default App;
