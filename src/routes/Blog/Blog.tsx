import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Section from '../../components/Section';
import article from '../../blog/test.md';

const Blog = () => {
  return (
    <Section
      className="blog"
      sidebar={
        <>
          <h4>Recent Articles</h4>
        </>
      }
    >
      <ReactMarkdown children={article} remarkPlugins={[remarkGfm]} />
    </Section>
  );
};

export default Blog;
