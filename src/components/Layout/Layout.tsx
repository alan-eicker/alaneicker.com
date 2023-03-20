import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import About from '../About';
import Projects from '../Projects';

export type Props = {
  header: {
    title: string;
    subtitle: string;
    nav: string[];
  };
  hero: {
    strapline: string;
    title: string;
    subtitle: string;
    text: string;
  };
  preface: string;
  footer: {
    copyright: string;
    emailAddress: string;
    phoneNumber: string;
    socialLinks: {
      title: string;
      url: string;
      icon: string;
    }[];
  };
  sections: any;
};

const Layout = ({ header, footer, hero, sections }: Props) => (
  <div className="layout">
    <div className="layout__header">
      <Header {...header} />
    </div>
    <main className="layout__main">
      <div className="layout__hero" id="home">
        <Hero {...hero} />
      </div>
      <div className="layout__body">
        <About bio={sections.bio} skills={sections.skills} />
        <Projects {...sections.projects} />
      </div>
      <Footer {...footer} />
    </main>
  </div>
);

export default Layout;
