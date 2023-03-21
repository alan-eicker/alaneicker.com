import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import About from '../About';
import Projects from '../Projects';
import Career from '../Career';
import { LayoutProps } from '../../types/components';

const Layout = ({ header, footer, hero, sections }: LayoutProps) => (
  <>
    <Header {...header} />
    <main className="layout">
      <div className="layout__hero" id="home">
        <Hero {...hero} />
      </div>
      <div className="layout__body">
        <About bio={sections.bio} skills={sections.skills} />
        <Projects {...sections.projects} />
        <Career {...sections.career} />
      </div>
      <Footer {...footer} />
    </main>
  </>
);

export default Layout;
