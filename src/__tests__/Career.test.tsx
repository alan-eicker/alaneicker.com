import React from 'react';
import { screen, render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Career from '../components/Career';

describe('<Career />', () => {
  const props = {
    key: 'Career',
    title: "Companies I've Worked for",
    content:
      "Over the course of my long career, I've had the pleasure of working for a bunch of great companies including:",
    resumeUrl: 'alan-eicker-resume.pdf',
    companies: [
      { company: 'Allstate Insurance', duration: 'Mar 2015 - Present' },
      { company: 'RealPage', duration: 'Apr 2012 - Mar 2015' },
      { company: 'Restaurant.com', duration: 'Nov 2010 - Apr 2012' },
      {
        company: 'optionsXpress (now Charles Schwab)',
        duration: 'Feb 2008 - Nov 2010',
      },
      {
        company: 'Leader Graphic Design',
        duration: ' Mar 2007 - Feb 2008',
      },
    ],
  };

  beforeEach(() => {
    render(<Career {...props} />);
  });

  it('Should set section title', () => {
    expect(
      screen.getByRole('heading', {
        level: 4,
        name: props.title,
      }),
    );
  });

  it('Should set text content', () => {
    expect(screen.getByText(props.content));
  });

  it('Should render a resume link with url to resume', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', props.resumeUrl);
  });

  it('Should render 5 career items in list', () => {
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');

    expect(items.length).toBe(5);
  });
});
