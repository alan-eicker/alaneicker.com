import React from 'react';
import DocHead from './components/DocHead';
import Layout from './components/Layout';
import content from './content.json';

const { docTitle, ...layoutContent } = content;

const App = () => (
  <>
    <DocHead title={docTitle} />
    <Layout {...layoutContent} />
  </>
);

export default App;
