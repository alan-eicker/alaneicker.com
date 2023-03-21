import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import About from '../About';
import Projects from '../Projects';
import Career from '../Career';

export type Props = {
  header: {
    logoImg: string;
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
    iconCredits: {
      websiteLinkUrl: string;
      websiteLinkText: string;
      iconUrl: string;
      iconName: string;
    };
    socialLinks: {
      title: string;
      url: string;
      icon: string;
    }[];
  };
  sections: any;
};

const Layout = ({ header, footer, hero, sections }: Props) => (
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
