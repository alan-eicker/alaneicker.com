import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';

const Layout = ({ content }) => (
  <div className="layout">
    <div className="layout__header">
      <Header {...content.header} />
    </div>
    <main>
      <Hero {...content.hero} />
      <div className="layout__body">
        {/* <Section title="" {...content.about} /> */}
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
