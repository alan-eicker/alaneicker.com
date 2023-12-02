import React from 'react';
import { screen, render } from '@testing-library/react';
import About from '../components/About';

describe('<About />', () => {
  const props = {
    bio: {
      title: 'About',
      content: 'content...',
    },
    skills: {
      title: 'JavaScript',
      items: [
        {
          name: '',
          icon: '',
        },
      ],
    },
  };

  beforeEach(() => {
    render(<About {...props} />);
  });

  it('Should set section title', () => {
    expect(
      screen.getByRole('heading', {
        level: 4,
        name: props.bio.title,
      }),
    );
  });

  it('Should render content', () => {
    const paragraphs = props.bio.content.split('|');

    paragraphs.forEach((p) => {
      expect(screen.getByText(p));
    });
  });
});
