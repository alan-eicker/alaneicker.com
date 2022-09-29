import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';

const Layout = ({ content }) => (
  <div className="layout">
    <div className="layout__header">{/* <Header /> */}</div>
    <main className="layout__main">
      <Hero
        strapline="Hi, my name is"
        title="Alan Eicker."
        subtitle="I Build User Experiences."
        text="I am an experienced front-end engineer with [years] years of expertise building user-friendly interfaces. My primary focus is on building user experiences that are reliable, scalable, and accessible."
      />
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
