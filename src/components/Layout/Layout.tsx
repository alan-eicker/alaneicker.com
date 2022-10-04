import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import About from '../About';
import Skills from '../Skills';

type Props = {
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
    };
    sections: any[];
  };
};

type Section = {
  content: any;
  key: string;
  skills: {
    frontEnd: string[];
    backEnd: string[];
    documentation: string[];
    sourceControl: string[];
    learning: string[];
  };
  title: string;
};

const setLeftColumnContent = (section: Section) => {
  switch (section.key) {
    case 'about':
      return <About id={section.key} {...section} />;
    case 'skills':
      return <Skills id={section.key} {...section} />;
    default:
      return null;
  }
};

const Layout = ({ content }: Props) => (
  <div className="layout">
    <div className="layout__header">
      <Header {...content.header} />
    </div>
    <main className="layout__main">
      <div className="layout__hero" id="home">
        <Hero {...content.hero} />
      </div>
      <div className="layout__body" tabIndex={0}>
        {content.sections.map((section) => {
          return (
            <Grid>
              <Row>
                <Col md={8}>{setLeftColumnContent(section)}</Col>
                <Col md={4}></Col>
              </Row>
            </Grid>
          );
        })}
      </div>
      <Footer {...content.footer} />
    </main>
  </div>
);

export default Layout;
