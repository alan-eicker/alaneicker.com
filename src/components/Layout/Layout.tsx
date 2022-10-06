import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import * as Sections from '../Sections';

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
      emailAddress: string;
      phoneNumber: string;
    };
    sections: any[];
  };
};

type SectionTypes = {
  About: {
    title: string;
    content: string;
  };
  Skills: {
    title: string;
    skills: {
      frontEnd: string[];
      backEnd: string[];
      documentation: string[];
      sourceControl: string[];
      learning: string[];
    };
  };
};

const leftColMatchers = new RegExp(/(About|Skills|Career|FindMeOnTheWeb)/i);
const rightColMatchers = new RegExp(/(Projects)/i);

const Layout = ({ content }: Props) => {
  const leftCol = content.sections
    .filter((section) => section.key.match(leftColMatchers))
    .map((section) => {
      const Component = Sections[section.key as keyof SectionTypes];
      return <Component id={section.key} {...section} />;
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
