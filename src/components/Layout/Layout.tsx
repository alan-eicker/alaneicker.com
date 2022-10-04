import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import About from '../About';

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
        {content.sections.map(({ key, ...section }, idx) => {
          switch (key) {
            case 'about':
              return <About key={key} id="about" {...section} />;
            default:
              return null;
          }
        })}
      </div>
      <Footer {...content.footer} />
    </main>
  </div>
);

Layout.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.shape({
      logoText: PropTypes.string,
      nav: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default Layout;
