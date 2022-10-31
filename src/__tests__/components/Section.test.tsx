import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Section from '../../components/Section';

describe('<Section />', () => {
  const props = {
    title: 'Section Title',
  };

  it('Should render with a title and children', () => {
    render(
      <Section {...props}>
        <a href="">link</a>
      </Section>,
    );

    expect(screen.getByRole('link', { name: /link/i })).toBeInTheDocument();
    expect(screen.getByText(/Section Title/)).toBeInTheDocument();
  });
});
