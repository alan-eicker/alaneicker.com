import React from 'react';
import DocTitle from './components/DocTitle';
import Layout from './components/Layout';
import content from './content.json';

const { docTitle, ...layoutContent } = content;

const App = () => {
  return (
    <>
      <DocTitle title={docTitle} />
      <Layout content={layoutContent} />
    </>
  );
};

export default App;
