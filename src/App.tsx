import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
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

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: { [key: string]: any }) => {
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
        options={{
          fps_limit: 60,
          interactivity: {
            detect_on: 'canvas',
            events: {
              onclick: { enable: true, mode: 'push' },
              onhover: {
                enable: true,
                mode: 'attract',
                parallax: { enable: false, force: 60, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              attract: { distance: 200, duration: 0.4, factor: 5 },
            },
          },
          particles: {
            color: { value: '#1d3b61' },
            line_linked: {
              color: '#1d3b61',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              bounce: false,
              direction: 'none',
              enable: true,
              out_mode: 'out',
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
              anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
              random: false,
              value: 0.5,
            },
            shape: {
              character: {
                fill: false,
                font: 'Verdana',
                style: '',
                value: '*',
                weight: '400',
              },
              image: {
                height: 100,
                replace_color: true,
                src: 'images/github.svg',
                width: 100,
              },
              polygon: { nb_sides: 5 },
              stroke: { color: '#000000', width: 0 },
              type: 'circle',
            },
            size: {
              anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
              random: true,
              value: 5,
            },
          },
          polygon: {
            draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: 'none',
            url: '',
          },
          retina_detect: true,
        }}
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
