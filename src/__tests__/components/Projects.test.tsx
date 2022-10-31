import React from 'react';
import { act, screen, render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import moxios from 'moxios';
import Projects from '../../components/Projects';

describe('<Projects />', () => {
  const props = {
    title: 'Title',
    apiUrl: 'https://api.github.com/users/alaneicker1975/repos',
    featuredProject: {
      description: 'Project description',
      title: 'Project Title',
      icon: {
        viewBox: '',
        fill: '',
        path: '',
        title: '',
      },
      url: 'http://project.com',
      urlText: 'View Project on GitHub',
    },
  };

  beforeEach(() => {
    moxios.install();
    render(<Projects {...props} />);
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Should render title and description', () => {
    expect(screen.getByText(/Project description/)).toBeInTheDocument();
    expect(screen.getByText(/Project Title/)).toBeInTheDocument();
  });

  it('Should render a link', () => {
    expect(
      screen.getByRole('link', { name: /View Project on GitHub/i }),
    ).toHaveAttribute('href', props.featuredProject.url);
  });

  it('Should get repo list from GitHub API', async () => {
    const response = [
      {
        description: 'My project repo description',
        name: 'MyProjectRepo',
        html_url: 'https://url/to/repo',
      },
      {
        description: 'My other project repo description',
        name: 'MyOtherProjectRepo',
        html_url: 'https://url/to/repo',
      },
    ];

    await act(() => {
      moxios.requests.mostRecent().respondWith({
        status: 200,
        response,
      });
    });

    const listitems = screen.getAllByRole('listitem');

    listitems.forEach((listitem, idx) => {
      expect(
        within(listitem).getByRole('link', { name: response[idx].name }),
      ).toHaveAttribute('href', response[idx].html_url);
    });
  });
});
