import React from 'react';
import { screen, render, within } from '@testing-library/react';
import Career from '../components/Career';

describe('<Career />', () => {
  const props = {
    resume: {
      title: 'My Resume',
      resumeDownloadUrl: 'http://www.website.com/resume.pdf',
      items: [
        {
          company: 'Acme Co.',
          url: 'https://www.acmeco.com',
          duration: 'May 2020 - Present',
          positionHeld: ['President', 'CEO'],
        },
        {
          company: 'Awesome Co.',
          duration: 'May 2020 - Present',
          positionHeld: ['Web Developer'],
        },
      ],
    },
    referrals: {
      title: 'My Referrals',
      items: [
        {
          referee: 'John Doe',
          jobTitle: 'Manager',
          content: 'Blah blah blah.',
        },
      ],
    },
  };

  beforeEach(() => {
    render(<Career {...props} />);
  });

  describe('Resume Section', () => {
    it('Should set resume section title', () => {
      expect(
        screen.getByRole('heading', {
          level: 4,
          name: props.resume.title,
        }),
      );
    });

    it('Should render a resume link with url to resume', () => {
      expect(
        screen.getByRole('link', { name: /View my Resumé/i }),
      ).toHaveAttribute('href', props.resume.resumeDownloadUrl);
    });

    it('Should render first career item', () => {
      const [career1] = screen.getAllByRole('list');

      const items = within(career1).getAllByRole('listitem');

      expect(items.length).toBe(2);
      expect(screen.getByRole('link', { name: /Acme Co./i })).toHaveAttribute(
        'href',
        'https://www.acmeco.com',
      );
    });

    it('Should render second career item', () => {
      const [_, career2] = screen.getAllByRole('list');

      const items = within(career2).getAllByRole('listitem');

      expect(items.length).toBe(1);
      expect(screen.getByText('Awesome Co.')).toBeInTheDocument();
      expect(
        screen.queryByRole('link', { name: /Awesome Co./i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('Referrals section', () => {
    it('Should set referral title', () => {
      expect(
        screen.getByRole('heading', {
          level: 4,
          name: props.referrals.title,
        }),
      );
    });

    it('Should set the referral items content', () => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Manager')).toBeInTheDocument();
      expect(screen.getByText('Blah blah blah.')).toBeInTheDocument();
    });
  });
});
