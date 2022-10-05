import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../Section';
import RepoList from '../RepoList';

type Props = {
  title: string;
  apiUrl: string;
};

const Projects = ({ apiUrl, title, ...others }: Props) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/alaneicker1975/repos')
      .then(({ data }) => setRepos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Section title={title} {...others}>
      <RepoList items={repos} excludes={new RegExp(/alaneicker1975/)} />
    </Section>
  );
};

export default Projects;
