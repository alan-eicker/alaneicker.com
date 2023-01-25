import React from 'react';
import DocHead from './components/DocHead';
import Layout from './components/Layout';
import content from './content.json';

const { docTitle, ...layoutContent } = content;

// Testing jenkins build...

const App = () => {
  return (
    <>
      <DocHead title={docTitle} />
      <Layout content={layoutContent} />
    </>
  );
};

export default App;
