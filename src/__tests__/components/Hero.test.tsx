import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../../components/Hero';

describe('<Hero />', () => {
  const props = {
    strapline: 'Hi, my name is',
    title: 'Alan Eicker',
    text: 'blah blah',
    subtitle: 'I Bring User Experiences to Life.',
  };

  beforeEach(() => {
    render(<Hero {...props} />);
  });

  it('Should render the strapline section', () => {
    expect(screen.getByText(/Hi, my name is/)).toBeInTheDocument();
  });

  it('Should render the title section', () => {
    expect(screen.getByText(/Alan Eicker/)).toBeInTheDocument();
  });

  it('Should render the subtitle section', () => {
    expect(
      screen.getByText(/I Bring User Experiences to Life./),
    ).toBeInTheDocument();
  });

  it('Should render the subtitle section', () => {
    expect(screen.getByText(/blah blah/)).toBeInTheDocument();
  });
});
