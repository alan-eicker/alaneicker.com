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
    <div className="layout">
      <main>
        <Hero {...hero} />
        <div className="layout__body">
          <About bio={sections.bio} skills={sections.skills} />
          <Projects {...sections.projects} />
          <Career {...sections.career} />
        </div>
      </main>
      <Footer {...footer} />
    </div>
  </>
);

export default Layout;
