import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import * as Sections from '../Sections';

export type LayoutProps = {
  content: {
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
    };
    sections: any[];
  };
};

export type SectionTypes = {
  About: {
    title: string;
    content: string;
  };
  Career: {
    title: string;
    content: string;
    resumeUrl: string;
    companies: {
      company: string;
      duration: string;
    }[];
  };
  FindMeOnTheWeb: {
    title: string;
    content: {
      title: string;
      url: string;
      path: string;
      viewBox: string;
      fill: string;
      height: string;
      width: string;
    }[];
  };
  Projects: {
    title: string;
    apiUrl: string;
    featuredProject: {
      description: string;
      title: string;
      icon?: {
        viewBox: string;
        fill: string;
        path: string;
        title: string;
      };
      url: string;
      urlText: string;
    };
  };
  Skills: {
    title: string;
    skills: {
      frontEnd: string[];
      backEnd: string[];
      fullStack: string[];
      documentation: string[];
      sourceControl: string[];
      learning: string[];
    };
  };
};

const leftColMatchers = new RegExp(/(About|Skills|Career|FindMeOnTheWeb)/i);
const rightColMatchers = new RegExp(/(Projects)/i);

const Layout = ({ content }: LayoutProps) => {
  const leftCol = content.sections
    .filter((section) => section.key.match(leftColMatchers))
    .map((section) => {
      const Component = Sections[section.key as keyof SectionTypes];
      return <Component key={section.id} id={section.key} {...section} />;
    });

  const rightCol = content.sections
    .filter((section) => section.key.match(rightColMatchers))
    .map((section) => {
      const Component = Sections[section.key as keyof SectionTypes];
      return <Component {...section} />;
    });

  return (
    <div className="layout">
      <div className="layout__header">
        <Header {...content.header} />
      </div>
      <main className="layout__main">
        <div className="layout__hero" id="home">
          <Hero {...content.hero} />
        </div>
        <div className="layout__body" tabIndex={0}>
          <Grid>
            <Row>
              <Col md={7}>{leftCol}</Col>
              <Col md={1} />
              <Col id="Projects" md={4}>
                {rightCol}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer {...content.footer} />
      </main>
    </div>
  );
};

export default Layout;
