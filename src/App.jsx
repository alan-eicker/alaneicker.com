import React from 'react';
import DocTitle from './components/DocTitle';
import Layout from './components/Layout';
import { useAppContext } from './providers/AppProvider';

const App = () => {
  const { content } = useAppContext();

  if (!content) {
    return null;
  }

  const { docTitle, ...layoutContent } = content;

  return (
    <>
      <DocTitle title={docTitle} />
      <Layout content={layoutContent} />
    </>
  );
};

export default App;
