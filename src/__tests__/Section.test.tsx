import React from 'react';
import { screen, render } from '@testing-library/react';
import Section from '../components/Section';

describe('<Section />', () => {
  it('Should render children', () => {
    render(
      <Section>
        <a href="">link</a>
      </Section>,
    );

    expect(screen.getByRole('link', { name: /link/i })).toBeInTheDocument();
  });

  it('Should render sidebar content', () => {
    render(
      <Section sidebar={<>sidebar section</>}>
        <a href="">link</a>
      </Section>,
    );

    expect(screen.getByText('sidebar section')).toBeInTheDocument();
  });
});
