import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../Section';
import RepoList from '../RepoList';
import FeaturedProject from '../FeaturedProject';

type Props = {
  title: string;
  apiUrl: string;
  featuredProject: {
    description: string;
    title: string;
    icon?: {
      viewBox: string;
      fill: string;
      path: string;
    };
    url: string;
    urlText: string;
  };
};

const Projects = ({ apiUrl, featuredProject, title, ...others }: Props) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/alaneicker1975/repos')
      .then(({ data }) => {
        setRepos(data);

        // This event needs to be called in order for the Parcel pre-renderer
        // to pick up the data from the above async request
        document.dispatchEvent(new Event('prerender-trigger'));
      });
  }, []);

  return (
    <Section className="top-margin-mobile" title={title} {...others}>
      <>
        <FeaturedProject {...featuredProject} />
        <RepoList items={repos} excludes={new RegExp(/alaneicker1975/)} />
      </>
    </Section>
  );
};

export default Projects;
