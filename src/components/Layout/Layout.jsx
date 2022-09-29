import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';

const Layout = ({ content }) => (
  <div className="layout">
    <div className="layout__header">{/* <Header /> */}</div>
    <main className="layout__main">
      <Hero {...content.hero} />
      {/* <Section title="" {...content.about} /> */}
      {/* <Footer /> */}
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
