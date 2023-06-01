import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturedProject from '../components/FeaturedProject/FeaturedProject';

const props = {
  sectionTitle: 'My Projects',
  projectTitle: 'Project Title',
  projectImage: './project-image.png',
  projectSubtitle: 'Project subtitle',
  projectDescription: 'Project desription',
  projectUrls: [
    {
      text: 'project',
      href: 'http://www.project.com',
    },
  ],
};

describe('<FeaturedProject />', () => {
  beforeEach(() => {
    render(<FeaturedProject {...props} />);
  });

  it('Should render a section title', () => {
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      props.sectionTitle,
    );
  });

  it('Should render a project title', () => {
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(
      props.projectTitle,
    );
  });

  it('Should render a project subtitle', () => {
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(
      props.projectSubtitle,
    );
  });

  it('Should render a project image', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', props.projectImage);
  });

  const projectLinks = props.projectUrls.map((link) => Object.values(link));

  test.each(projectLinks)(
    'Should render a link with text %p and href %p',
    (text, href) => {
      expect(screen.getByRole('link', { name: text })).toHaveAttribute(
        'href',
        href,
      );
    },
  );
});
